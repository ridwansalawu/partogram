
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const User = require("./models/users"); // your Mongoose User model

require("dotenv").config();

// ===============================
// Local Strategy for login
// ===============================
passport.use(new LocalStrategy(User.authenticate()));

// serialize / deserialize for local strategy (required by passport-local-mongoose)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ===============================
// JWT helpers
// ===============================
const secretKey = process.env.SECRET_KEY || "mysecretkey"; // replace with secure env var

exports.getToken = (user) => {
    // sign user payload (typically _id) into JWT
    return jwt.sign({ _id: user._id }, secretKey, { expiresIn: "1h" });
};

// ===============================
// JWT Strategy for protecting routes
// ===============================
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey,
};

passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload._id)
            .then((user) => {
                if (user) return done(null, user);
                else return done(null, false);
            })
            .catch((err) => done(err, false));
    })
);

// middleware to protect routes
exports.verifyUser = passport.authenticate("jwt", { session: false });
