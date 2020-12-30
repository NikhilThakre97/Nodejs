const { json } = require("express");
const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var users = [];

app.get("/",(req,res) => {
    res.json(users);
})

app.post("/vehicleregistration",(req,res) => {
    let bike = {};
    bike.name = req.body.name;
    bike.model = req.body.model;
    bike.price = req.body.price;
    users.push(bike);
    res.json(users);
})

app.put("/update/:name",(req,res) => {
    users.forEach((item) => {
        if(item.name === req.params.name){
            item.name = req.body.name;
            item.model = req.body.model;
            item.price = req.body.price;
        }
    })
    res.json(users);
})

app.delete("/delete/:name",(req,res) => {
    users.forEach((item,index) => {
        if(item.name === req.params.name){
            users.splice(index,1);
        }
    })
    res.json(users);
})



app.listen(8080)