const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");




// const razorpay = new Razorpay({
// 	key_id: "rzp_test_pU4a3esB14Mg3t",
// 	key_secret: "DFzsHm0VLmdj35DR4VBwrWGD",
// });
// router.post("/ordercreate", (req, res) => {
// 	var options = {
// 		amount: 3 * 100,
// 		currency: "INR",
// 		//receipt:"order_HwCFPk2l7w0pP6",
// 	};
// 	razorpay.orders.create(options, (err, order) => {
// 		res.send(order);
// 	});
// });
// router.get("/order", (req, res) => {
// 	var options = {
// 		order_id: "order_Hxcvj00c6GEnC5",
// 		//receipt:"order_HwCFPk2l7w0pP6",
// 	};
// 	razorpay.orders.fetch("order_HwCFPk2l7w0pP6", (err, order) => {
// 		console.log(order);
// 		if (err) console.log(err);
// 	});
// });
// router.post("/createpayment", (req, res) => {
// 	var options = {
// 		payment_id: "pay_HwCG4N2aAtOKjh",
// 		amount: 2 * 100,
// 		currency: "INR",
// 		//receipt:"order_HwCFPk2l7w0pP6",
// 	};
// 	razorpay.payments.capture(options, (err, order) => {
// 		res.send(order);
// 		if (err) {
// 			console.log(err);
// 		}
// 	});
// });
// router.get("/payment/all", (req, res) => {
// 	razorpay.payments.all().then((res) => {
// 		res.send(res);
// 	});
// });
// router.get("/data", (req, res) => {
// 	razorpay.payments.fetch("pay_HwCG4N2aAtOKjh").then((a) => console.log(a));
// });
// router.get("/orderpayment", (req, res) => {
// 	razorpay.orders
// 		.fetchPayments("order_HwCFPk2l7w0pP6")
// 		.then((a) => console.log(a));
// });

module.exports = router;
