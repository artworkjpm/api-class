var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var users = require("./routes/users");
var books = require("./routes/books");
var principles = require("./routes/principles");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/users", users);
app.use("/api/v1/books", books);
app.use("/api/v1/principles", principles);

module.exports = app;
