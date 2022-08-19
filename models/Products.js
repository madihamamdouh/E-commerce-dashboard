const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: Array },
    category: { type: Array, required: true },
    brand: {
      type: String,
      requierd: true,
    },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    rating: { type: Number },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
