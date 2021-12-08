const express = require("express");
const router = express.Router();
const config = require("../common/config");
const client = require("twilio")(config.accountSID, config.authToken);

router.post("/login", async (req, res) => {
	try {
		client.verify
			.services(config.serviceID)
			.verifications.create({
				to: `+91${req.body.phonenumber}`,
				channel: "sms",
			})
			.then((data) => {
				res.status(200).send(data);
			});
	} catch (err) {
		console.log(err);
	}
});

router.post("/verify", async (req, res) => {
	try {
		client.verify
			.services(config.serviceID)
			.verificationChecks.create({
				to: `+91${req.body.phonenumber}`,
				code: req.body.code,
			})
			.then((data) => {
				res.status(200).send(data);
			});
	} catch (err) {
		console.log(err);
	}
});
module.exports = router;
