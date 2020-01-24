var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser")
var http = require("http");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session")
var FileStore = require("session-file-store")(session);





var indexRouter = require('./routes/index');
var usersRouter = require("./routes/usersRouter")
var parturientsRouter = require("./routes/parturientsRouter")

const mongoose = require("mongoose");
const Parturients = require("./models/parturients")

const url = "mongodb://localhost:27017/partogram";
const connect = mongoose.connect(url)

connect.then((db) => {
    console.log("YaY🎃🤝... connected succesfully to the database");
}, (err) => {
    console.log(err);
})

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser("123-45678-90-98848"));

app.use(session({
  name: "session-id",
  secret: "848884848488858458488484",
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));

function auth(req, res, next) {
  // console.log(req.signedCookies);
  console.log(req.session)


  if (!req.session.user) {
    var authHeader = req.headers.authorization;
    if (!authHeader) {
      var err = new Error("you are not authenticated");
      res.setHeader("WWW-Authenticate", "Basic");
      err.status = 401;
      next(err);
      return 
    }
    var auth = new Buffer.from(authHeader.split(" ")[1], "base64").toString().split(":");
    var username = auth[0];
    var password = auth[1];

  if (username === "admin" && password === "password") {
    // res.cookie("user", "admin", { signed: true })
    req.session.user = "admin";
    next();
  }
  else {
    var err = new Error("you are not authenticated");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    next(err);
  }
}
else {
  if (req.session.user === "admin") {
    next();

  }
  else {
    var err = new Error("you are not authenticated");
    err.status = 401;
    next(err);
  }
}

  }
  

 

  

app.use(auth);
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/parturients', parturientsRouter)

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
