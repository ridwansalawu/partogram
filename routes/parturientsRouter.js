var express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authenticate = require("../authenticate");
const Parturients = require("../models/parturients");
const pdf = require("html-pdf");

const parturientsRouter = express.Router();

parturientsRouter.use(bodyParser.json());


parturientsRouter
  .route("/")
  // .options((req, res) => { res.sendStatus(200)})
  .get(async(req, res, next) => {
    await Parturients.find(req.query)
      .then(
        parturients => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(parturients);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post(async(req, res, next) => {
    await Parturients.create(req.body)
      .then(
        parturient => {
          console.log(
            "Another patient admitted into labour ward, ",
            parturient
          );
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(parturient);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
 
  .delete(authenticate.verifyUser, (req, res, next) => {
    Parturients.remove({})
      .then(
        parturient => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

parturientsRouter
  .route("/:parturientId")
  .get(async(req, res, next) => {
    await Parturients.findById(req.params.parturientId)
      .then(
        parturient => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(parturient);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .post(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /parturients/" + req.params.parturientId
    );
  })
  .put(async(req, res, next) => {
    await Parturients.findOneAndUpdate(
      req.params.parturientId,
      {
        $set: req.body
      },
      { useFindAndModify: false },
      (error, result) => {
        if (error) {
          console.log(error);
        }
      }
    )
      .then(
        parturient => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(parturient);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })
  .delete((req, res, next) => {
    Parturients.findByIdAndRemove(req.params.parturientId)
      .then(
        parturient => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(parturient);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

// ====================================================================================================
parturientsRouter
  .route("/cervicogram/:parturientId")
  .get(async(req, res, next) => {
    await Parturients.findById(req.params.parturientId)
      .populate("comments.author")
      .then(
        parturient => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(parturient.partographDataset.vagEx);
        },
        err => next(err)
      )
      .catch(err => next(err));
  })

  .put((req, res, next) => {
     Parturients.findByIdAndUpdate(
      req.params.parturientId,
      {
        $push: {
          "partographDataset.vagEx": req.body
        } 
      },
      { new: true }
    )
      .then(
        parturient => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(parturient.partographDataset.vagEx);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

parturientsRouter.route("/search/:searchParams")
.get(async(req, res, next) => {
  await Parturients.findOne({
    medId: req.params.searchParams
  })
    .then(
      parturient => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(parturient);
      },
      err => next(err)
    )
    .catch(err => next(err));
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

parturientsRouter
  .route("/clearcervicogram/:parturientId")
  .put(async (req, res, next) => {
    console.log("parturient id", req.params.parturientId);
    await Parturients.findByIdAndUpdate(
      req.params.parturientId,
      {
        $set: { "partographDataset.vagEx": [] }
      },
      { new: true },
      (err, res) => {
        if (err) {
          console.log("is this error?", err.errMsg);
          console.log("show me res:", res);
        }
      }
    )
      .then(
        parturient => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(parturient);
        },
        err => next(err)
      )
      .catch(err => next(err));
  });

  // parturientsRouter
  //   .route("downloadPartographPdf")
  //   .post((req, res) => {
  //     pdf.create(req.body, {}).toFile("result.pdf", (err) => )
      
  //   })

module.exports = parturientsRouter;
