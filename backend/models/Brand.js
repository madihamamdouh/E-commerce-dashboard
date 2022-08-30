const mongoose = require("mongoose");
const BrandSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: String },
    category: { type: String, required: true },
    products: { type: Array, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Brand", BrandSchema);
