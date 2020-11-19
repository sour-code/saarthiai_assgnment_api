const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({

    username: {
		type: String,
		required: true,
		minlength: 3,
        maxlength: 20,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    }
})


userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{
			_id: this._id,
			username: this.name,
			password:this.password,
		},
		config.get("jwtPrivateKey")
	);
	return token;
};
const User = mongoose.model("User", userSchema);
function validateUser(user) {
    const schema = {
		username: Joi.string().min(3).max(20).required(),
		
		password: Joi.string().required(),
		
	};

	return Joi.validate(user, schema);

}

exports.User = User;
exports.validate = validateUser;