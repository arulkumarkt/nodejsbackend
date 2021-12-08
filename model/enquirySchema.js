const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
	username: { type: String, required: true },
	phoneNumber: { type: Number, required: true },
	area: { type: String, required: true },
	preference: { type: Array, required: true },
});
module.exports = mongoose.model("enquirySchema", enquirySchema);
