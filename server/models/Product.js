const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  image: { type: String, required: true },
  featuredCategory: { type: Boolean, default: false },
  popularProduct: { type: Boolean, default: false },
  dailyBestSells: { type: Boolean, default: false },
  dealsOfTheDay: { type: Boolean, default: false },
  dealsOfTheDayTime: { type: Date, default: null },
  topSelling: { type: Boolean, default: false },
  trendingProduct: { type: Boolean, default: false },
  recentlyAdded: { type: Boolean, default: false },
  topRated: { type: Boolean, default: false },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);