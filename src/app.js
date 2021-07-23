const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const requests = require("requests");

require("./db/conn");
const User = require("./model/dynamic");

const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));

const staticPaths = path.join(__dirname,"../views");
app.set("views",staticPaths);
app.set("view engine","hbs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res) => {
    res.render("index");
})

app.post("/contact",async (req,res) => {
    try {
        //res.send(req.body);
        const Userdata = new User({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            message:req.body.message,
        })

        const result = await Userdata.save();
        res.status(201).render("index");
        console.log(result);

    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
})

app.get("*",(req,res) => {
    res.send("page couldn't be found");
})

app.listen(port,() => {
    console.log("listening");
})
