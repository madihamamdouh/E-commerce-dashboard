const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: Array },
    category: { type: String, required: true },
    brand: {
      type: String,
      requierd: true,
    },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
