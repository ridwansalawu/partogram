var express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authenticate = require("../authenticate");
// const cors = require("./cors")
const Parturients = require("../models/parturients");

const parturientsRouter = express.Router();

parturientsRouter.use(bodyParser.json());

parturientsRouter.route("/")
  // .options((req, res) => { res.sendStatus(200)})
  .get( async (req, res, next) => {
    await Parturients.find(req.query)
      .populate('comments.author')
      .then((parturients) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(parturients)
      },
      (err) => next(err))
      .catch((err) => next(err))
  })
  .post(  (req, res, next) => {
    Parturients.create(req.body)
      .then((parturient)=> {
        console.log("Another patient admitted into labour ward, ", parturient)
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(parturient)

      }, (err) => next(err) )
      .catch((err) => next(err))
  })
//   .put((req,res,next) => {
//     res.statusCode = 403;
//     res.end("PUT operation not supported!")
// })
.delete(authenticate.verifyUser,(req,res,next) => {
   
  Parturients.remove({})
  .then((parturient) => {
   res.statusCode = 200;
   res.setHeader("Content-Type", "application/json");
   res.json(resp)
  }, (err) => next(err))
  .catch((err) => next(err));
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

parturientsRouter.route('/:parturientId')
// .options((req, res) => { res.sendStatus(200)})
.get((req,res,next) => {
  Parturients.findById(req.params.parturientId)
    .populate("comments.author")
    .then((parturient) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(parturient);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser,(req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /parturients/'+ req.params.parturientId);
})
.put((req, res, next) => {
  Parturients.findOneAndUpdate(req.params.parturientId, {
    
    $set:req.body
    
   
    
        // $set: req.body
    })
    .then((parturient) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(parturient);
    }, (err) => next(err))
    .catch((err) => next(err));
    console.log(req.body.hour)
})
.delete((req, res, next) => {
  Parturients.findByIdAndRemove(req.params.parturientId)
    .then((parturient) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(parturient);
    }, (err) => next(err))
    .catch((err) => next(err));
});

// ====================================================================================================
parturientsRouter.route('/cervicogram/:parturientId')
.get((req,res,next) => {
  Parturients.findById(req.params.parturientId)
    .populate("comments.author")
    .then((parturient) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(parturient.partographDataset.vagEx);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.put((req,res,next) => {
  Parturients.findByIdAndUpdate(req.params.parturientId, {
    
    $push: {
      "partographDataset.vagEx" : req.body
    },
   
    
        // $set: req.body
    }, { new: true})
    .then((parturient) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(parturient.partographDataset.vagEx);
    }, (err) => next(err))
    .catch((err) => next(err));
    
  
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

parturientsRouter.route("/search/:searchParams")
.get((req, res, next) => {
  Parturients.findOne({
    medId: req.params.searchParams
    
  })
  .then(parturient => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(parturient)
  }, (err) => next(err))
  .catch((err) => next(err))
})


module.exports = parturientsRouter;

