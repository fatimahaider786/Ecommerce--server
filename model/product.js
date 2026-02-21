import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
});

const Product = mongoose.model("Product", productSchema);
export default Product;