const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    image: { type: String, required: true },
    hoverImage: { type: String, required: false },
    popularProduct: { type: Boolean, default: false },
    dailyBestSells: { type: Boolean, default: false },
    dealsOfTheDay: { type: Boolean, default: false },
    dealsOfTheDayStartTime: { type: Date, default: null },
    dealsOfTheDayEndTime: { type: Date, default: null },
    topSelling: { type: Boolean, default: false },
    trendingProduct: { type: Boolean, default: false },
    recentlyAdded: { type: Boolean, default: false },
    topRated: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
