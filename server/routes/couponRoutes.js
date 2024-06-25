const express = require('express');
const { getAllCoupons, createCoupon, updateCoupon, deleteCoupon } = require('../controllers/couponController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getAllCoupons);
router.post('/', protect, createCoupon);
router.put('/:id', protect, updateCoupon);
router.delete('/:id', protect, deleteCoupon);

module.exports = router;
