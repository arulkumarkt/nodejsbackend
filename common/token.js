const jwt = require("jsonwebtoken");

const tokenGenrator = (email) => {
	const token = jwt.sign({ email }, process.env.JWT_KEY, {
		expiresIn: "3hours",
	});
	return token;
};
const tokenValidator = (token) => {
	try {
		const data = jwt.verify(token, process.env.JWT_KEY);
		return data;
	} catch (err) {
		return false;
	}
};

module.exports.tokenGenrator = tokenGenrator;
module.exports.tokenValidator = tokenValidator;
