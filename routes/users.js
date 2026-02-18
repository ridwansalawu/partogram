
const express = require('express');
const router = express.Router();
const passport = require('passport');
//const User = require('../models/User');
const authenticate = require('../authenticate');

/**
 * -----------------------------
 * SIGNUP
 * -----------------------------
 */
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Missing username or password' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create new user
    const user = new User({ username, password });
    await user.save();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: { _id: user._id, username: user.username }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * -----------------------------
 * LOGIN
 * -----------------------------
 */
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    const token = authenticate.getToken(req.user);
    res.status(200).json({
      success: true,
      token,
      user: { _id: req.user._id, username: req.user.username }
    });
  }
);

/**
 * -----------------------------
 * CHECK JWT TOKEN (Optional)
 * -----------------------------
 * Used by frontend to verify if a stored JWT is still valid
 */
router.get('/checkJWTToken', authenticate.verifyUser, (req, res) => {
  res.status(200).json({
    success: true,
    user: { _id: req.user._id, username: req.user.username }
  });
});

module.exports = router;
