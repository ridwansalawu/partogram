
const express = require('express');
const router = express.Router();
const authenticate = require('../authenticate');

router.get('/secret', authenticate.verifyUser, (req, res) => {
  res.json({ message: `Hello ${req.user.username}, you are authenticated!` });
});

module.exports = router;
