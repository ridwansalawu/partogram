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



const indexRouter = require('./routes/index');
const usersRouter = require("./routes/users")
const parturientsRouter = require("./routes/parturientsRouter");


const mongoose = require("mongoose");
const Parturients = require("./models/parturients")

// const url = mongodb://heroku_txkzlqcg:qi80oli0imv5ncm1bolj8dta9c@ds259596.mlab.com:59596/heroku_txkzlqcg
const url = process.env.MONGODB_URI;
const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false } )

connect.then((db) => {
    console.log(`YaY🎃🤝... connected succesfully to the database at ${url}`);
}, (err) => {
    console.log("***db Connection Error***" + err);
})

const app = express();
const cors = require("cors");
app.use(cors());

// app.use((req,res,next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');

//   next();
// }) 

app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter)
app.use('/users', usersRouter)
// app.use(authenticate);
app.use('/parturients', parturientsRouter)
app.use("/parturients/:parturientId", parturientsRouter)



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



module.exports = app;
// =========================================================
