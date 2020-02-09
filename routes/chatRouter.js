const express = require("express");
const chatRouter = express.Router();

chatRouter.get("/", (req, res) => {
    res.send({ response: "Server is up and running." }).status(200);
})

module.exports = chatRouter;