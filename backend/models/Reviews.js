const mongoose = require("mongoose");
const ReviewsSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },

    productId: { type: String, required: true },
    comment: { type: String, required: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Reviews", ReviewsSchema);
