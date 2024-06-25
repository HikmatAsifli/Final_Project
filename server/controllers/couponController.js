const Coupon = require('../models/Coupon');

// Get All Coupons
exports.getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Coupon
exports.createCoupon = async (req, res) => {
  const { code, discount, expirationDate } = req.body;
  try {
    const coupon = await Coupon.create({ code, discount, expirationDate });
    res.status(201).json(coupon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Coupon
exports.updateCoupon = async (req, res) => {
  const { id } = req.params;
  const { code, discount, expirationDate } = req.body;
  try {
    const coupon = await Coupon.findByIdAndUpdate(id, { code, discount, expirationDate }, { new: true });
    res.json(coupon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Coupon
exports.deleteCoupon = async (req, res) => {
  const { id } = req.params;
  try {
    await Coupon.findByIdAndDelete(id);
    res.json({ message: 'Coupon deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
