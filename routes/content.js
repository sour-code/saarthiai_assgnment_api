const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { html_data } = require("../models/html_data");
const rp = require('request-promise');
const bodyParser = require("body-parser");

var jsonParser = bodyParser.json()
router.post("/",jsonParser,async (req,res)=>{

if(req.body.url=='')
   return res.status(400).send('invalid url')
   console.log(req.body.url)
 
  
  const url=req.body.url;
  rp(url)
  .then(async function(html){
    //success!
    data=new html_data(
      {
        data:html,
      }
    ) 
    console.log("before save")
    await data.save()
    //console.log(html);
    console.log("end")
    return res.send(html)
    
  })
  .catch(function(err){
    return res.status(500).send("error occured during fetching data from url")
  });

})

module.exports = router;