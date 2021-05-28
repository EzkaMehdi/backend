const express = require("express")
const cors = require("cors");
const {superHeros} = require("./dataHeroes")
const app = express();


app.use(express.json())
app.use(cors())

const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});



app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });
  
  
//   app.get("/heroes", (req, res) => {
//       res.json(superHeros)
//   })

let name = req.params.name;
let powers = req.params.power;
let color = req.params.color;
let isAlive = req.params.isAlive;
let age = req.params.age;
let image = req.params.image;
app.get("/heroes/:name", (req, res) => {
    res.json({
        message: `Le Heros :${name,powers,color,isAlive,age,image}!`,
    });
});

app.get("/heroes/:name/powers", (req, res) => {
    res.json({
        message: `Hello ${powers}!`,
    });
})

// app.post("/heroes", (req, res) => {
//     console.log("Ok, heros ajouté !")
// })

