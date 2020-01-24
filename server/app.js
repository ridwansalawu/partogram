var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser")
var http = require("http");
var cookieParser = require('cookie-parser');
var logger = require('morgan');





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
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
   
//     res.statusCode = 200;
//     res.setHeader("Content-type", "text/html")
//     res.end(`
//     <html><body>
//     <h1>Hello Mutherfuckers! the is the express server</h1>
//     </body></html>
//     `)
// });

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
