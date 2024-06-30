const Product = require('../models/Product');

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Product
exports.getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Product
exports.createProduct = async (req, res) => {
  const {
    name,
    category,
    description,
    price,
    discount,
    image,
    hoverImage,
    rating,
    popularProduct,
    dailyBestSells,
    dealsOfTheDay,
    dealsOfTheDayStartTime,
    dealsOfTheDayEndTime,
    topSelling,
    trendingProduct,
    recentlyAdded,
    topRated
  } = req.body;

  try {
    const product = await Product.create({
      name,
      category,
      description,
      price,
      discount,
      image,
      hoverImage,
      rating,
      popularProduct,
      dailyBestSells,
      dealsOfTheDay,
      dealsOfTheDayStartTime,
      dealsOfTheDayEndTime,
      topSelling,
      trendingProduct,
      recentlyAdded,
      topRated
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    category,
    description,
    price,
    discount,
    image,
    hoverImage,
    rating,
    popularProduct,
    dailyBestSells,
    dealsOfTheDay,
    dealsOfTheDayStartTime,
    dealsOfTheDayEndTime,
    topSelling,
    trendingProduct,
    recentlyAdded,
    topRated
  } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        category,
        description,
        price,
        discount,
        image,
        hoverImage,
        rating,
        popularProduct,
        dailyBestSells,
        dealsOfTheDay,
        dealsOfTheDayStartTime,
        dealsOfTheDayEndTime,
        topSelling,
        trendingProduct,
        recentlyAdded,
        topRated
      },
      { new: true }
    );
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Endpoint for filtering products
exports.getProducts = async (req, res) => {
  try {
    let query = {};

    // Fget filtering parameters
    const { category, priceRange, sortBy } = req.query;

    // Adding a category parameter
    if (category) {
      query.category = category;
    }

    // Adding a price range parameter
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-');
      query.price = { $gte: minPrice, $lte: maxPrice };
    }

    // Adding a sort parameter
    let sortOptions = {};
    if (sortBy === 'price_asc') {
      sortOptions.price = 1;
    } else if (sortBy === 'price_desc') {
      sortOptions.price = -1;
    } else {
      sortOptions.createdAt = -1; // If sorting is not selected, the newest products will be first
    }

    // Find products
    const products = await Product.find(query).sort(sortOptions);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
