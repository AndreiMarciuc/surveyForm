var express= require("express");
var app = express();
var port =8000;
var bp = require("body-parser");
var session=require("express-session");
var path = require("path");
app.use(bp.urlencoded());
app.use(express.static(path.join(__dirname,"/view")));
app.use(session({secret:"secretkey"}));
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("index");
});

app.post("/result", function (req, res){
    res.render('result', {info: req.body});
});

app.listen(port,function(){
    console.log("listening");
});




  
  