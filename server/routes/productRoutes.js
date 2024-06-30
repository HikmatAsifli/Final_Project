const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getSingleProduct)

router.post("/",  createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
