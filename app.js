
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// --- Routers ---
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const parturientsRouter = require("./routes/parturientsRouter");
const drugsRouter = require("./routes/drugsRouter");
const protectedRouter = require("./routes/protected");

// --- Passport config ---
require("./authenticate"); // only loads Local + JWT strategies

const app = express();

// ===============================
// Middleware
// ===============================
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize()); // no session
app.use(express.static("public"));

// ===============================
// MongoDB Connection
// ===============================
const url = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/partogram";
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`✅ YaY🎃🤝... connected succesfully to the database MongoDB at ${url}`))
.catch(err => console.log("***DB Connection Error***", err));

// ===============================
// Routes
// ===============================
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/protected", protectedRouter);
app.use("/drugsearch", drugsRouter);
app.use("/parturients", parturientsRouter);
app.use("/parturients/:parturientId", parturientsRouter);

// serve React frontend for all unmatched routes
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// ===============================
// Error handler
// ===============================
app.use((req, res, next) => {
    res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send("Server Error");
});


module.exports = app;
