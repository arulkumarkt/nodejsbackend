const express = require("express");
const router = express.Router();
const AddressSchema = require("../model/addressSchema");
router.post("/save", async (req, res) => {
	const data = new AddressSchema({
		street: req.body.street,
		landmark: req.body.landmark,
		pincode: req.body.pincode,
		area: req.body.area,
		location: req.body.location,
		phonenumber:req.body.phonenumber
	});
	try {
		const data1 = await data.save();
		res.json(data1);
	} catch (err) {
		console.log(err);
	}
});
module.exports = router;
