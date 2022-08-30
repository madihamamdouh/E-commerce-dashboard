const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    products: { type: Array },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Category", CategorySchema);
