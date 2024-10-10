const db = require("../models");

// create Main Model
const product = db.products;
const review = db.reviews;

// Create Product
const addProduct = (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published,
  };
};
