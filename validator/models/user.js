const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    ville:String,
    created: { type: Date, default: Date.now }
    
})
res.status(400);
res.json('error');
module.exports = userModel