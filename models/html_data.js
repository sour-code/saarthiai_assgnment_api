const config = require("config");
const { string } = require("joi");

const mongoose = require("mongoose");

const htmlSchema = new mongoose.Schema({

    data:{
        type:String
    }
})

const html_data = mongoose.model("html_data", htmlSchema );

exports.html_data = html_data;