const express = require("express");
const router = express.Router();
const calenderSchema = require("../model/calenderSchema");

router.post("/save", async (req, res) => {
	const data = new calenderSchema({
		productID: req.body.productID,
		meal: req.body.meal,
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
		const datas = await calenderSchema.find();
		res.send(datas);
		res.end();
	} catch (err) {
		console.log(err);
	}
});
router.get("/findone");

module.exports = router;
