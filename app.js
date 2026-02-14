const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session")
const FileStore = require("session-file-store")(session);
const authenticate = require('./authenticate');

const indexRouter = require('./routes/index');
const parturientsRouter = require("./routes/parturientsRouter");
const drugsRouter = require("./routes/drugsRouter");


const passport = require('passport');
const bodyParser = require("body-parser")
const express = require('express');
const usersRouter = require("./routes/users")
const cors = require("cors");
const mongoose = require("mongoose");
const protectedRouter = require("./routes/protected");

require("dotenv").config();
require("./authenticate");



const Parturients = require("./models/parturients");
const MongoStore = require("connect-mongo");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());


// --- MongoDB connection ---
const url = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/partogram";
const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true } )

connect.then(() => {
    console.log(`YaY🎃🤝... connected succesfully to the database at ${url}`);
}, (err) => {
    console.log("***db Connection Error***" + err);
})



// --- Routes ---
app.use('/users', usersRouter);
app.use('/protected', protectedRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



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
app.use(express.static("public"));



// ===============================
// Session Middleware (Mongo-backed)
// ===============================

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: 'sessions'
    })
}));

// ===============================
// Passport initialization
// ===============================
app.use(passport.initialize());
app.use(passport.session());
require('./authenticate'); // loads Local + JWT strategies

// app.use(passport.session());

// app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter)
app.use('/users', usersRouter)
// app.use(authenticate);
app.use("/drugsearch", drugsRouter)
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
