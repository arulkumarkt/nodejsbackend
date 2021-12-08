const mongoose = require("mongoose");

const calenderSchema = new mongoose.Schema({
  productID: { type: String, required: true },
  meal: { type: Array, required: true },
});
module.exports = mongoose.model("calenderSchema", calenderSchema);
