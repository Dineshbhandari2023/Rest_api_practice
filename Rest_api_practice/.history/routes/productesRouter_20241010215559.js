const productController = require("../controllers/productController.js");

const router = require("express").Router();

router.post("/addProduct", productController.addProduct);

router.get("/allProducts", productController.getAllProducts);

router.get("/publishedProduct", productController.getPublishedProducts);
router.get("/product/:id", productController.getProductById);

router.put("/updateProduct/:id", productController.updateProduct);

router.delete("/deleteProduct/:id", productController.deleteProduct);
