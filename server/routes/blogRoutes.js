const express = require("express");
const {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
} = require("../controllers/blogController");
const { protect,admin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog)
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
