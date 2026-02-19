
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const User = require("./models/User");

require("dotenv").config();

// ===============================
// Local Strategy
// ===============================
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ===============================
// JWT Configuration
// ===============================
const secretKey = process.env.JWT_SECRET;

exports.getToken = (user) => {
  return jwt.sign({ _id: user._id }, secretKey, {
    expiresIn: "1h"
  });
};

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload._id);
      if (user) return done(null, user);
      else return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  })
);

exports.verifyUser = passport.authenticate("jwt", { session: false });
