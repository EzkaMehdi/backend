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



mongoose.connect("mongodb://localhost:27017/trippy_basics", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

const hotelSchema = mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    country: String,
    stars: Number,
    hasSpa:Boolean,
    hasPool:Boolean,
    priceCategory:Number,
    date: { type: Date, default: Date.now }
})

const hotel = mongoose.model("hotel", hotelSchema)

const restaurantSchema = mongoose.Schema({
    name: String,
    adress: String,
    city: String,
    country: String,
    stars: Number,
    cuisine:Boolean,
    priceCategory:String,
    date: { type: Date, default: Date.now }
})

const restaurant = mongoose.model("restaurant", restaurantSchema)


  