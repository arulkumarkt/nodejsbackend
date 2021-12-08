const { tokenValidator } = require("./token");

module.exports = function (req, res, next) {
	const { jwt } = req.cookie;
};
