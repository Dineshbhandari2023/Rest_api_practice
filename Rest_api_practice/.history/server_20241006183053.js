const express = require("express");
const cors = require("cors");

const app = express();

var corsOption = {
  origin: "http://localhost:8081",
};

// Middleware:
app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// TEST API
app.get("/", (req, res) => {
  res.send("API is running!");
});
