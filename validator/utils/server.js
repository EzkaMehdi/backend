const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const { debug } = require("./middlewares/debug")
const validatorRoutes = require("../routes/validatorRoutes")

const port = 8000

const app = express()

app.use(cors())

app.use(express.json())

app.use(debug)

app.listen(port, () => {
    console.log("Server is listenin at port ", port);
})



mongoose.connect("mongodb://localhost:27017/validator", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})


