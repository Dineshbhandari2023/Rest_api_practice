const express = require("express");
const cors = require("cors");

const app = express();

var corsOption = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOption));

app.use(express.json());
