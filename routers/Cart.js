const express = require("express");
const router = express.Router();
const CartSchema = require("../model/CartSchema");

router.post("/save", async (req, res) => {
	const data = new CartSchema({
		cartdetail: req.body,
	});
	try {
		const data1 = await data.save();
		res.json(data1);
	} catch (err) {
		console.log(err);
	}
});
router.post("/show", async (req, res) => {
	try {
		const datas = (await CartSchema.find()).filter((x) => {
			return x.cartdetail[0].phonenumber === req.body.phonenumber;
		});
		res.send(datas);
	} catch (err) {
		console.log(err);
	}
	// clg(datas);
	// 	res.send(datas);
	// 	res.end();
	// } catch (err) {
	// 	console.log(err);
	// }
});

module.exports = router;
