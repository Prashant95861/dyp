const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/dynamicweb",
    {useFindAndModify:false, 
     useNewUrlParser: true ,
     useUnifiedTopology: true})
.then( () => console.log("connection successful"))
.catch( (err) => console.log(err));