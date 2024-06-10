const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  label: String,
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
