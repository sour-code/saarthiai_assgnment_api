const express=require("express")
const login=require("../routes/login")
const content=require("../routes/content")

module.exports=function(app){
    app.use(express.json());
    app.use("/login", login)
	app.use("/content", content)
}