const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// Connect to db
require("./db/mongoose");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, "../public")));

app.use("/", require("./routes/index"));
app.use("/api/users", require("./routes/user"));
app.use("/api/users", require("./routes/user"));
app.use("/api/locations", require("./routes/location"));
app.use("/api/pages", require("./routes/page"));
app.use("/api/links", require("./routes/link"));
app.use("/api/settings", require("./routes/setting"));

module.exports = app;
