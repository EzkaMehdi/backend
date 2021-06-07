const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})


const carSchema = new mongoose.Schema({

    brand: String,
    model: String,
    year: Number,
    created : {type:Date ,default:Date.now}
})

cars.save((err, cars) => {

    if (err) {
        console.log("Something went wrong");
        console.log(err);
    } else {
        console.log("Saved the new informations ! ");
    }
})

const renault1 = new car({
    brand: "Renault",
    model: "Espace",
    year: 1999
})

renault1.save((err, car) => {
    if (err) {
        console.log('something went wrong');
        console.log(err);
      } else {
    console.log(`save ${car.brand} with ${car._id}`)
      }

})