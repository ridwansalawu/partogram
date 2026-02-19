
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');
const authenticate = require('../authenticate');

/**
 * =====================================
 * SIGNUP
 * =====================================
 * Creates a new user using passport-local-mongoose
 */
router.post('/signup', async (req, res) => {
  try {
    const { username, password, firstname, lastname } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required'
      });
    }

    const user = await User.register(
      new User({
        username,
        firstname: firstname || '',
        lastname: lastname || ''
      }),
      password
    );

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      user: {
        _id: user._id,
        username: user.username
      }
    });

  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
});

/**
 * =====================================
 * LOGIN
 * =====================================
 * Uses Passport LocalStrategy
 */
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {

    const token = authenticate.getToken({
      _id: req.user._id,
      username: req.user.username
    });

    res.status(200).json({
      success: true,
      token,
      user: {
        _id: req.user._id,
        username: req.user.username
      }
    });
  }
);

/**
 * =====================================
 * VERIFY JWT
 * =====================================
 * Used by frontend to check stored token
 */
router.get(
  '/checkJWTToken',
  authenticate.verifyUser,
  (req, res) => {
    res.status(200).json({
      success: true,
      user: {
        _id: req.user._id,
        username: req.user.username
      }
    });
  }
);

/**
 * =====================================
 * LOGOUT
 * =====================================
 * (JWT logout is handled client-side by deleting token)
 */
router.get('/logout', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Logout successful (client must delete token)'
  });
});

module.exports = router;
