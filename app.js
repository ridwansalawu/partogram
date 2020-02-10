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



const socketio = require("socket.io");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./ioUsers");
const chatRouter = require("./routes/chatRouter")



const indexRouter = require('./routes/index');
const usersRouter = require("./routes/users")
const parturientsRouter = require("./routes/parturientsRouter");
const uploadRouter = require("./routes/uploadRouter");
const parturientRouter = require("./routes/parturientsRouter")

const mongoose = require("mongoose");
const Parturients = require("./models/parturients")

// const url = mongodb://heroku_txkzlqcg:qi80oli0imv5ncm1bolj8dta9c@ds259596.mlab.com:59596/heroku_txkzlqcg
const url = process.env.MONGODB_URI || 'mongodb.localhost.xxx';
const connect = mongoose.connect(url, {useNewUrlParser: true})

connect.then((db) => {
    console.log("YaY🎃🤝... connected succesfully to the database");
}, (err) => {
    console.log("***db Connection Error***" + err);
})




const app = express();

const ioServer = http.createServer(app);
const io = socketio(ioServer);











const cors = require("cors");













app.use(cors());

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');

  next();
}) 




// app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());


app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use(chatRouter)
app.use('/', indexRouter)
app.use('/users', usersRouter)


// app.use(auth);
app.use('/parturients', parturientsRouter)
app.use("/parturients/:parturientId", parturientsRouter)
app.use('/imageUpload', uploadRouter)

app.use('/environment_dump', (req, res) => {
  res.send(process.env);
});

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






  io.on('connect', (socket) => {
    console.log(" 👺there is a new socket connection");


    socket.on('join', ({ name, room }, callback) => {
      
      const { error, user } = addUser({ id: socket.id, name, room });
      console.log(" ==== " + user)
      if(error) return callback(error);
  
      socket.join(user.room);
    
  
      socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
      socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
  
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
  
      callback();
    });
  
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);
      console.log(user)
  
      io.to(user.room).emit('message', { user: user.name, text: message });
  
      callback();
    });
  
    socket.on('disconnect', () => {
      const user = removeUser(socket.id);
      console.log(" 👹the niggah just left!!!!!!!")
  
      if(user) {
        io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
      }
    })
  });


ioServer.listen(5000, () => console.log(` 👺🤡 the IOSOCKET Server has started.`));
module.exports = app;
