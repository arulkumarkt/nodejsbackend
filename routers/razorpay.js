const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const paidstatusSchema = require("../model/paidstatusSchema");
const razorpay = new Razorpay({
	// key_id: "rzp_test_XBxSTfuh3KwPyT",
	key_id: "rzp_live_1CNXWOnFytpoaB",
	key_secret: "eAlZGixVLCe8y35tMBQbhxDU",
});

router.post("/pay/:rate", async (req, res) => {
	const payment_capture = 1;
	const amount = req.params.rate;
	const currency = "INR";
	const options = {
		amount: amount * 100,
		currency,
		//receipt: shortid.generate(),
		payment_capture,
	};

	try {
		const response = await razorpay.orders.create(options);
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount,
		});
	} catch (error) {
		console.log(error);
	}
});
router.post("/save", async (req, res) => {
	// console.log(req.body);
	const data = new paidstatusSchema({
		productdetail: req.body,
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
		const datas = await paidstatusSchema.find();
		res.send(datas);
		res.end();
	} catch (err) {
		console.log(err);
	}
});
// router.get("/payment/all", (req, res) => {
// 	razorpay.payments.all().then((res) => {
// 		res.send(res);
// 	});
router.get("/payment/all", async (req, res) => {
	try {
		const data = await razorpay.payments.all();
	} catch (err) {
		console.log(err);
	}
});
module.exports = router;
