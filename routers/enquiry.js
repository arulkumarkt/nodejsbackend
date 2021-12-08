const express = require("express");
const router = express.Router();
const enquirySchema = require("../model/enquirySchema");

router.post("/data", async (req, res) => {
	const data = new enquirySchema({
		username: req.body.username,
		phoneNumber: req.body.phoneNumber,
		area: req.body.area,
		preference: [
			{ breakfast: req.body.breakfast },
			{ lunch: req.body.lunch },
			{ dinner: req.body.dinner },
		],
	});
	try {
		const data1 = await data.save();
		res.json(data1);
	} catch (err) {
		console.log(err);
	}
});
router.get("/all", async (req, res) => {
	try {
		const datas = await enquirySchema.find();
		res.send(datas);
		res.end();
	} catch (err) {
		console.log(err);
	}
});
router.delete("/deleteone", async (req, res) => {
	try {
		const datas = await enquirySchema.findOneAndDelete();
		res.send(datas);
		res.end();
	} catch (err) {
		console.log(err);
	}
});
module.exports = router;
