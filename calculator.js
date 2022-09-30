const express = require("express");
const bp = require("body-parser");

const app = express();
app.use(bp.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmicalc.html")
});

app.post("/",function(req,res){
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);
  var bmi = w/(h*h);
  res.send("Your BMI is "+bmi);
});

app.listen(3000,function(){console.log("BMI Calculator is running on 3000");});
