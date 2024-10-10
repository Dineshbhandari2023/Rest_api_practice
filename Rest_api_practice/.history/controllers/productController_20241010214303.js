const db = require("../models");

// create Main Model
const product = db.products;
const review = db.reviews;

// Create Product
const addProduct = async (req, res) => {
  let info = {
    id: req.params.id,
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
  let products = await Product.findAll({});
  res.status(200).send(products);
};

// Get Single product
const getProductById = async (req, res) => {
  let product = await Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).send({ message: "Product Not Found." });
  }

  res.status(200).send(product);
};

// Update Product with new information

const updateProduct = async (req, res) => {
  let product = await Product.update(req.params.id);

  if (!product) {
    return res.status(404).send({ message: "Product Not Found." });
  }

  product.title = req.body.title ? req.body.title : product.title;
  product.price = req.body.price ? req.body.price : product.price;
  product.description = req.body.description
    ? req.body.description
    : product.description;
  product.published = req.body.published
    ? req.body.published
    : product.published;

  await product.save();
  res.status(200).send(product);
};
