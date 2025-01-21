const express = require("express");
const app = express;
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
let mongoose = require("mongoose");

app.use(cors());
app.get("/", (req, res) => {
    res.send("Wolcome Node")
});

mongoose.connect("mongodb+srv://nicatmmab205:nijat205@af206.i3y14.mongodb.net/")
.then(()=>{
    console.log("connect")
})


console.log("salam");


app.listen(3000, () => {
    console.log("bu app 3000 portda dinlənilir")
});
