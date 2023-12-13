const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    email:{
        type:String, 
        require:true
    }, 
    password:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model("Schema", schema)





