const mongoose = require("mongoose");

const paidstatusSchema = new mongoose.Schema({
	productdetail: { type: Array, required: true },
});
module.exports = mongoose.model("paidstatus", paidstatusSchema);
