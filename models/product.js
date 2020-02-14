const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let productSchema = new Schema({
  imagePath: String,
  title: String,
  price: Number,
  size: Number,
  category: String,
  brand: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
