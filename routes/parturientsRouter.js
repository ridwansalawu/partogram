const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authenticate = require("../authenticate");
const Parturients = require("../models/parturients");
const pdf = require("html-pdf");

const parturientsRouter = express.Router();

parturientsRouter.use(bodyParser.json());



/* ===================================================== */
/* ROOT ROUTE */
/* ===================================================== */

parturientsRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const parturients = await Parturients.find(req.query);
      res.status(200).json(parturients);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const parturient = await Parturients.create(req.body);
      res.status(200).json(parturient);
    } catch (err) {
      next(err);
    }
  })
  .delete(authenticate.verifyUser, async (req, res, next) => {
    try {
      const result = await Parturients.deleteMany({});
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  });

/* ===================================================== */
/* SINGLE PARTURIENT */
/* ===================================================== */

parturientsRouter
  .route("/:parturientId")
  .get(async (req, res, next) => {
    try {
      const parturient = await Parturients.findById(req.params.parturientId);
      res.status(200).json(parturient);
    } catch (err) {
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      const parturient = await Parturients.findByIdAndUpdate(
        req.params.parturientId,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(parturient);
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const parturient = await Parturients.findByIdAndDelete(
        req.params.parturientId
      );
      res.status(200).json(parturient);
    } catch (err) {
      next(err);
    }
  });

/* ===================================================== */
/* CERVICOGRAM */
/* ===================================================== */

parturientsRouter
  .route("/cervicogram/:parturientId")
  .get(async (req, res, next) => {
    try {
      const parturient = await Parturients.findById(
        req.params.parturientId
      );
      res.status(200).json(parturient.partographDataset.vagEx);
    } catch (err) {
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      const parturient = await Parturients.findByIdAndUpdate(
        req.params.parturientId,
        { $push: { "partographDataset.vagEx": req.body } },
        { new: true }
      );
      res.status(200).json(parturient.partographDataset.vagEx);
    } catch (err) {
      next(err);
    }
  });

parturientsRouter
  .route("/clearcervicogram/:parturientId")
  .put(async (req, res, next) => {
    try {
      const parturient = await Parturients.findByIdAndUpdate(
        req.params.parturientId,
        { $set: { "partographDataset.vagEx": [] } },
        { new: true }
      );
      res.status(200).json(parturient);
    } catch (err) {
      next(err);
    }
  });

/* ===================================================== */
/* MATERNAL HEART RATE */
/* ===================================================== */

parturientsRouter
  .route("/maternalheartrate/:parturientId")
  .get(async (req, res, next) => {
    try {
      const parturient = await Parturients.findById(
        req.params.parturientId
      );
      res.status(200).json(parturient.partographDataset.matHeartRate);
    } catch (err) {
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      const parturient = await Parturients.findByIdAndUpdate(
        req.params.parturientId,
        { $push: { "partographDataset.matHeartRate": req.body } },
        { new: true }
      );
      res.status(200).json(parturient.partographDataset.matHeartRate);
    } catch (err) {
      next(err);
    }
  });

parturientsRouter
  .route("/clearmaternalheartrate/:parturientId")
  .put(async (req, res, next) => {
    try {
      const parturient = await Parturients.findByIdAndUpdate(
        req.params.parturientId,
        { $set: { "partographDataset.matHeartRate": [] } },
        { new: true }
      );
      res.status(200).json(parturient);
    } catch (err) {
      next(err);
    }
  });

/* ===================================================== */
/* SEARCH */
/* ===================================================== */

parturientsRouter
  .route("/search/:searchParams")
  .get(async (req, res, next) => {
    try {
      const parturient = await Parturients.findOne({
        medId: req.params.searchParams
      });
      res.status(200).json(parturient);
    } catch (err) {
      next(err);
    }
  });

module.exports = parturientsRouter;
