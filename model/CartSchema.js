const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
	cartdetail: { type: Array, required: true },
});
module.exports = mongoose.model("CartSchema", CartSchema);
