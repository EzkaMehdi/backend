const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{ type: String, min: 4, required: true },
    email:{ type: String, required: true },
    age:{ type: Number, min: 2, max: 2, required: true },
    ville:{ type: String, required: true },
    created: { type: Date, default: Date.now }
    
})
res.status(400);
res.json('error');
module.exports = userModel