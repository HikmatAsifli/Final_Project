const express = require('express');
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getAllProducts);

router.post('/', protect, createProduct);

router.put('/:id', protect, updateProduct);

router.delete('/:id', protect, deleteProduct);

module.exports = router;