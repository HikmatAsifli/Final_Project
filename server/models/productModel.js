const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      discount:{
        type:Number,
        default:0
      },
      size:{
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },
      images: [],
      tags: String,
      rating: {
        type: String,
        default: 0,
      },
      review: {
        type: String,
        default: 0,
      },
    },
    { timestamps: true }
  );
  
  //Export the model
  module.exports = mongoose.model("Product", productSchema);