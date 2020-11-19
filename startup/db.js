
const mongoose = require("mongoose");
const config = require("config");


module.exports = function () {
	const db = process.env.MONGODB_URI || config.get("db");
	mongoose
		.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log(`Connected to ${db}...`));
};
