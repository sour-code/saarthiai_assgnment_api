
const _ = require("lodash");
const { User } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
	
   // console.log(req.body.username)
    let user = await User.findOne({ username: req.body.username });
	

    if (!user  ) 
		return res.status(400).send("user not found");
		else if(req.body.password!=user.password)
		return res.status(400).send("invalid username/password");




	const token = user.generateAuthToken();
	res.send(token);
});



module.exports = router;
