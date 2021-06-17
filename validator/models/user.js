const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{ type: String, required: true },
    email:{ type: String, required: true },
    age:{ type: Number, min: 1, max: 4, required: true },
    ville:{ type: String, required: true },
    created: { type: Date, default: Date.now }
    
})
res.status(400);
res.json('error');
module.exports = userModel