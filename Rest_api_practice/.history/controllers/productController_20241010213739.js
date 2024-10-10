const db = require("../models");

// create Main Model
const product = db.products;
const review = db.reviews;

// Create Product
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.Create(info);
  res.status(200).send(product);
  console.log(product);
};

// Get all products

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({
    attributes: [
      "id",
      "title",
      "price",
      "description",
      "published",
      [
        db.sequelize.fn("COUNT", db.sequelize.col("reviews.id")),
        "totalReviews",
      ],
      [
        db.sequelize.fn("AVG", db.sequelize.col("reviews.rating")),
        "averageRating",
      ],
    ],
  });
  res.status(200).send(products);
};

//
