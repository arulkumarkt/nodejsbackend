const mongoose = require("mongoose");
//const bcrypt=require('bcrypt');

const newUserSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	gender: { type: String, required: true },
	phoneNumber: { type: Number, required: true },
	Email: { type: String, required: true },
	bday: { type: String, required: true },
	password: { type: String, required: true },
	confirmpassword: { type: String, required: true },
});

// middleware for encrypting password want to see the decrypting  password
// newUserSchema.pre('save',async function(next){
//     try{
//         const salt=await bcrypt.genSalt(10)
//         const hashedPassword=await bcrypt.hash(this.password,salt);
//         this.password=hashedPassword;
//     }catch(err){
//         next(err);
//     }
// })

module.exports = mongoose.model("Register", newUserSchema);
