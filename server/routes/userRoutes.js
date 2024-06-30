const express = require("express");
const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
} = require("../controllers/userController");
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get("/profile", protect, getUserProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);

// Admin page route
router.get("/admin", protect, admin, (req, res) => {
  res.json({ message: 'Welcome to the admin page' });
});

module.exports = router;
