const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();

mongoose.connect("mongodb://localhost:27017/public", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 8000;
app.listen(port, () => console.log('Server', port))
