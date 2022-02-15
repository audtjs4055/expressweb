var express = require("express");


var app = express();
app.use("/test",express.static("sample"));

 app.get("/",(req,res)=>{
     res.send("Hello World");
 });

app.get("/hi",(req,res)=>{
    res.send("Hi");
});

app.get("/add",(req,res)=>{
    var p1 =req.param('p1');
    var p2 =req.param('p2');
    var result = Number(p1)+Number(p2);
    res.send("p1+p2="+result);
});

app.get("/minus",(req,res)=>{
    var p1 =req.param('p1');
    var p2 =req.param('p2');
    var result = Number(p1)-Number(p2);
    res.send("p1+p2="+result);
});

app.get("/multiply",(req,res)=>{
    var p1 =req.param('p1');
    var p2 =req.param('p2');
    var result = Number(p1)*Number(p2);
    res.send("p1+p2="+result);
});

app.get("/divide",(req,res)=>{
    var p1 =req.param('p1');
    var p2 =req.param('p2');
    var result = Number(p1)/Number(p2);
    res.send("p1+p2="+result);
});

app.post("/",(req,res)=>{
    res.send("Post");
});

app.listen(3000);