const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require('./user')
const config = require('./config')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

mongoose.connect("mongodb://localhost:27017/login", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})


const app = express()

app.use(cors())

app.use(express.json())



const port = 8000
app.listen(port, () => {
    console.log("Server is listening at port ", port);
})
app.get('/', (req, res) => {
    res.send('test');
  });