const express = require("express");
const {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
} = require("../controllers/blogController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog)
router.post("/", protect, createBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

module.exports = router;
