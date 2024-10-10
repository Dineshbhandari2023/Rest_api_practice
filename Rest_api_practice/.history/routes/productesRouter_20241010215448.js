const productController = require("../controllers/productController.js");

const router = require("express").Router();

router.post("/addProduct", productController.addProduct);

router.get("/allProducts", productController.getAllProducts);

router.get("/product/:id", productController.getProductById);
