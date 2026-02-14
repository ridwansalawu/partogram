
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const SECRET_KEY = process.env.SECRET_KEY || 'supersecret';

// --- Local Strategy ---
passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username });
    if (!user) return done(null, false, { message: 'Incorrect username' });
    const valid = await user.comparePassword(password);
    if (!valid) return done(null, false, { message: 'Incorrect password' });
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

// --- JWT Strategy ---
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const user = await User.findById(jwt_payload._id);
    if (user) return done(null, user);
    else return done(null, false);
  } catch (err) {
    return done(err, false);
  }
}));

// --- Helpers ---
exports.getToken = user => jwt.sign({ _id: user._id }, SECRET_KEY, { expiresIn: '1h' });
exports.jwtPassport = passport;
exports.verifyUser = passport.authenticate('jwt', { session: false });
