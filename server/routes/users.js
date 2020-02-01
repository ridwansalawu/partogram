var express = require('express');
const bodyParser = require("body-parser");
var User = require("../models/users");
var passport = require("passport");
var authenticate = require("../authenticate");
// var cors = require("./cors")


var router = express.Router();
router.use(bodyParser.json());

/* GET users listing. */
// router.options("*", corsWithOptions, (req, res) => {res.sendStatus(200)});
router.get("/",  (req, res, next) => {
  res.send("respond with a resource")
    // User.find({})
    // .then((users) => {
    //   res.statusCode = 200;
    //   res.setHeader("Content-Type", "application/json");
    //   res.json(users);
    // })
    // .catch((err) => {
    //   res.statusCode = 500;
    //   res.setHeader("Content-Type", "application/json")
    //   res.json({err: err});
    // })
});


  router.post('/signup', (req, res, next) => {
    User.register(new User({username: req.body.username}), 
      req.body.password, (err, user) => {
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
      }
      else {
        
        passport.authenticate("local")(req, response, () => {
          response.statusCode = 200;
          response.setHeader = ("Content-Type", "application/json");
          response.json({success: true, status: "Registration Successful!"});
        })
      }
    });
  });
  
  router.post('/login', passport.authenticate("local"), (req, res) => {
    const token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});

    // passport.authenticate('local', (err, user, info) => {
    //   if (err)
    //     return next(err)
    //   if (!user) {
    //     res.statusCode = 401;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.json({success: false, status: 'log in unsuccesful!', err: "could not log in user"});

    //   }

    //   req.logIn(user, (err) => {
    //     if (err) {
    //       res.statusCode = 401;
    //       res.setHeader("Content-Type", "application/json");
    //       res.json({success: false, status: 'log in unsuccesful!', err: info});

    //     }
     

    //   var token = authenticate.getToken({_id: req.user._id});
    //   res.statusCode = 200;
    //   res.setHeader('Content-Type', 'application/json');
    //   res.json({success: true, status: 'You are successfully logged in!', token: token});
    // });


    // }) (req, res, next);

  
  });


// router.get("/logout", (req, res, next) => {
//     if (req.session) {
//         req.session.destroy();
//         res.clearCookie("session-id");
//         res.redirect("/");
//     }
//     else {
//         var err = new Error("you are not logged in!");
//         err.status = 403;
//         // res.json({err: err})
//         next(err);
      
//     }
// });

router.get("/facebook/token", passport.authenticate("facebook-token"), (req, res) => {
  if (req.user) {
    const token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
  }

})

router.get("/checkJWTToken",  (req, res) => {
  passport.authenticate("jwt", {session: false},(err, user, info) => {
    if (err)
     return next(err);
     if (!user)
      res.statusCode = 401;

  } )
     



})





module.exports = router;