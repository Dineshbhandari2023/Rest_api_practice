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
  res.json({ message: "API is running!" });
});

// port

const PORT = process.env.PORT || 8080;

// SERVER
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
