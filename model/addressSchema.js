const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
	street: { type: String, required: true },
	landmark: { type: String },
	pincode: { type: String, required: true },
	area: { type: String, required: true },
	location: { type: String, required: true },
	phonenumber: { type: Number, required: true },
});

module.exports = mongoose.model("Address", AddressSchema);
