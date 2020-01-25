var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser")
var http = require("http");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session")
var FileStore = require("session-file-store")(session);

var passport = require('passport');
var authenticate = require('./authenticate');
var config = require("./config")




var indexRouter = require('./routes/index');
var usersRouter = require("./routes/users")
var parturientsRouter = require("./routes/parturientsRouter");
var uploadRouter = require("./routes/uploadRouter");

const mongoose = require("mongoose");
const Parturients = require("./models/parturients")

const url = config.mongoUrl;
const connect = mongoose.connect(url)

connect.then((db) => {
    console.log("YaY🎃🤝... connected succesfully to the database");
}, (err) => {
    console.log(err);
})

var app = express();

app.all("*", (req, res, next) => {
  if (req.secure) {
    return next();
  }
  else {
    res.redirect(307, 'https://' + req.hostname + ":" + app.get("secPort") + req.url)
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(cookieParser("123-45678-90-98848"));

// app.use(session({
//   name: "session-id",
//   secret: "848884848488858458488484",
//   saveUninitialized: false,
//   resave: false,
//   store: new FileStore()
// }));

app.use(passport.initialize());
// app.use(passport.session());

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.use(express.static(path.join(__dirname, 'public')));
// function auth (req, res, next) {
//   console.log(req.user);

//   if (!req.user) {
//     var err = new Error('You are not authenticated!');
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
    res.render('error');
  });


//   app.listen(port, () => {
//       console.log("Server running at port " + port)
//   })

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//     console.log("server running at port: " + port + "at " + hostname)
// })

module.exports = app;
