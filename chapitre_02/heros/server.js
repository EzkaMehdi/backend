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


app.get("/heroes/:name", (req, res) => {
    let name = req.params.name;
    const nameZer = superHeros.filter(hero => {
        
        return hero.name === req.params.name
    })
    res.json(nameZer);
});

app.get("/heroes/:name/powers", (req, res) => {
   const pouvZer = superHeros.filter(pouv => {
        
    return pouv.powers === req.params.power
})
    res.json(power)
})

// app.post("/heroes", (req, res) => {
//     console.log("Ok, heros ajouté !")
// })

