var express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authenticate = require("../authenticate");
const cors = require("./cors")
const Parturients = require("../models/parturients");

const parturientsRouter = express.Router();

parturientsRouter.use(bodyParser.json());

parturientsRouter.route("/")
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200)})
  .get(cors.cors, (req, res, next) => {
    Parturients.find(req.query)
      .populate('comments.author')
      .then((parturients) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(parturients)
      },
      (err) => next(err))
      .catch((err) => next(err))
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Parturients.create(req.body)
      .then((parturient)=> {
        console.log("Another patient admitted into labour ward, ", parturient)
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(parturient)

      }, (err) => next(err) )
      .catch((err) => next(err))
  })
  .put(cors.corsWithOptions, authenticate.verifyUser,(req,res,next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported!")
})
.delete(cors.corsWithOptions, authenticate.verifyUser,(req,res,next) => {
   
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
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200)})
.get(cors.cors,(req,res,next) => {
  Parturients.findById(req.params.parturientId)
    .populate("comments.author")
    .then((parturient) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(parturient);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.parturientId);
})
.put(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
  Parturients.findByIdAndUpdate(req.params.parturientId, {
        $set: req.body
    }, { new: true })
    .then((parturient) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(parturient);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
  Parturients.findByIdAndRemove(req.params.parturientId)
    .then((parturient) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(parturient);
    }, (err) => next(err))
    .catch((err) => next(err));
});

















































module.exports = parturientsRouter;

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;