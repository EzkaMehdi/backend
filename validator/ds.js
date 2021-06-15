const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const port = 8000

const app = express()

const debug = (req, res, next) => {
    console.log("I received a request!");

    next()
}

app.use(cors())

app.use(express.json())

app.use(debug)

app.listen(port, () => {
    console.log("Server is listenin at port ", port);
})



mongoose.connect("mongodb://localhost:27017/validator", (err) => {
    if (err) {
        res.json(err,"status code 400")
    } else {
        console.log("I'm connected to the database");
    }
})

const validerSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    city: String,
    date: { type: Date, default: Date.now }
})

const valider = mongoose.model("valider", validerSchema)



