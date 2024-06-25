const Blog = require('../models/Blog');

// Get All Blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Blog
exports.createBlog = async (req, res) => {
  const { title, content, author, image } = req.body;
  try {
    const blog = await Blog.create({ title, content, author, image });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Blog
exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, author, image } = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(id, { title, content, author, image }, { new: true });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Blog
exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await Blog.findByIdAndDelete(id);
    res.json({ message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
