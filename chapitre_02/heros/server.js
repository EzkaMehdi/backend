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
  
 
app.get("/heroes/:name", (req, res) => {
    let name = req.params.name;
    const nameZer = superHeros.filter(hero => {
        
        return hero.name === name
    })
    if (nameZer.length) {
        res.json(nameZer)
    } else {
        res.json({ message: "Noooo!" })
    }
});



    app.get("/heroes/:name/powers", (req, res) => {
        let name = req.params.name.toLowerCase()
    
    
        const nameZer = superHeros.filter(hero => {
            return hero.name === name
        })
    
        if (nameZer.length) {
            res.json(nameZer[0].power)
        } else {
            res.json({ message: "noooooooo!" })
        }
    
    })
    
    app.post("/heroes/:name/powers", (req, res) => {
        let name = req.params.name.toLowerCase()
        let newPower = req.body.newPower
    
        const nameZer = superHeros.filter(hero => {
            return hero.name === name
        })
    
        if (nameZer.length) {
    
            superHeros.forEach((hero, index) => {
    
                if (hero.name === nameZer[0].name) {
                    superHeros[index].power.push(newPower)
                }
            });
    
            res.json({ message: "Pouvoir ajouté !" })
    
        } else {
            res.json({ message: "nooooooooo!" })
        }
    })
    

// app.post("/heroes", (req, res) => {
//     console.log("Ok, heros ajouté !")
// })

