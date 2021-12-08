const express = require("express");
const router = express.Router();
const newUserSchema = require("../model/Registerschema");
const { tokenGenrator } = require("../common/token");

//showing all details in this route
router.get("/all", async (req, res) => {
	try {
		const datas = await newUserSchema.find();
		res.send(datas);
		res.end();
	} catch (err) {
		console.log(err);
	}
});
//showing single user use this in login  page
router.post("/loginEmail", async (req, res) => {
	try {
		{
			const data = await newUserSchema.find({
				$and: [{ Email: req.body.Email }, { password: req.body.password }],
			});
			if (!data[0]?.Email) {
				res.status(400).send("Incorrect user email & password");
			} else {
				res.send(data);
			}
		}
		// else if(!req.body.Email){
		// res.status(400)
		// res.send("Email doesn't exist")
		// }
		// else{
		//     res.status(400);
		//     res.send("Not a valid password");
		// }

		// if(data[0].Email){
		//     email=data[0].Email;
		//     const token = await tokenGenrator(email);
		//     res.cookie("jwt",token);
		//     res.send(token);
		//     res.end();
		// }
	} catch (err) {
		console.log(err);
	}
});
router.delete("/deleteone", async (req, res) => {
	try {
		const datas = await newUserSchema.findOneAndDelete();
		res.send(datas);
		res.end();
	} catch (err) {
		console.log(err);
	}
});
router.post("/loginotp", async (req, res) => {
	try {
		{
			const data = await newUserSchema.findOne({
				phonenumber: req.body.phonenumber,
			});
			if (data === null) {
				res.send("new user");
			} else {
				res.send(data);
			}
		}
	} catch (err) {
		console.log(err);
	}
});
//register page to store the details in this router
router.post("/register", async (req, res) => {
	console.log(req.body);
	//if already created the same email then send 400 and msg email already exist
	emailUser = await newUserSchema.findOne({ Email: req.body.Email });
	// phonenumber = await newUserSchema.findOne({
	// 	phonenumber: req.body.phonenumber,
	// });
	if (emailUser) return res.status(400).send("Email Already exist");
	//create a new schema and store to the db
	const data = new newUserSchema({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		gender: req.body.gender,
		phoneNumber: Number(req.body.phoneNumber),
		Email: req.body.Email,
		bday: req.body.bday,
		password: req.body.password,
		confirmpassword: req.body.confirmpassword,
	});
	try {
		const data1 = await data.save();
		res.json(data1);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
