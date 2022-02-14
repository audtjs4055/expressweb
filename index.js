var express = require("express");
var app = express();
app.use("/test",express.static("sample"));

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/hi",(req,res)=>{
    res.send("Hi");
});

app.post("/",(req,res)=>{
    res.send("Post");
});

app.listen(3000);