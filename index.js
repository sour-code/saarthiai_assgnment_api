const express=require("express")
const config=require("config")
const cors=require('cors')
const app=express()
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

//require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();



app.get("/",(req,res)=>{
    res.send("website is live")
    })
const port = process.env.PORT || config.get("port");
if(process.env.NODE_ENV==="production")
{
    app.use(express.static('client/build'));
}

const server=app.listen(port,()=>{
    console.log(`server listening at port: ${port}...`)
})

module.exports=server
