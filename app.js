const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser")
const http = require("http");

const logger = require('morgan');
const session = require("express-session")
const FileStore = require("session-file-store")(session);

const passport = require('passport');
const authenticate = require('./authenticate');
// const config = require("./config")




const indexRouter = require('./routes/index');
const usersRouter = require("./routes/users")
const parturientsRouter = require("./routes/parturientsRouter");
const uploadRouter = require("./routes/uploadRouter");

const mongoose = require("mongoose");
const Parturients = require("./models/parturients")

// const url = config.mongoUrl;
const url = process.env.DATABASE_URL;
const connect = mongoose.connect("mongodb://heroku_txkzlqcg:qi80oli0imv5ncm1bolj8dta9c@ds259596.mlab.com:59596/heroku_txkzlqcg", {useNewUrlParser: true})

connect.then((db) => {
    console.log("YaY🎃🤝... connected succesfully to the database");
}, (err) => {
    console.log("***db Connection Error***" + err);
})

const app = express();

// app.all("*", (req, res, next) => {
//   if (req.secure) {
//     return next();
//   }
//   else {
//     res.redirect(307, 'https://' + req.hostname + ":" + app.get("secPort") + req.url)
//   }
// })

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


// app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// app.use(session({
//   name: "session-id",
//   secret: "848884848488858458488484",
//   saveUninitialized: false,
//   resave: false,
//   store: new FileStore()
// }));

app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/users', usersRouter)


// function auth (req, res, next) {
//   console.log(req.user);

//   if (!req.user) {
//     const err = new Error('You are not authenticated!');
//     err.status = 403;
//     next(err);
//   }
//   else {
//         next();
//   }
// }
// app.use(auth);
app.use('/parturients', parturientsRouter)
app.use('/imageUpload', uploadRouter)


app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send('error');
  });


//   app.listen(port, () => {
//       console.log("Server running at port " + port)
//   })

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//     console.log("server running at port: " + port + "at " + hostname)
// })

module.exports = app;
