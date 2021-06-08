const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const {superHeros} = require("./dataHeroes")

mongoose.connect("mongodb://localhost:27017/heros", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

const herosSchema = mongoose.Schema({
    name: String,
    power: Array,
    color: String,
    isAlive: Boolean,
    age: Number,
    image:String,
    date: { type: Date, default: Date.now }
})

const Heros = mongoose.model("Heros", herosSchema)

// Heros.insertMany([
//     {name: "Iron Man",
//     power: ["money"],
//     color: "red",
//     isAlive: true,
//     age: 46,
//     image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
// },
// {
//     name: "Thor",
//     power: ["electricty", "worthy"],
//     color: "blue",
//     isAlive: true,
//     age: 300,
//     image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
// },
// {
//     name: "Daredevil",
//     power: ["blind"],
//     color: "red",
//     isAlive: false,
//     age: 30,
//     image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
//     },

// ]).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.error("Error insertMany Card: ", err);
// })


const port = 8000

const app = express()

const debug = (req, res, next) => {
    console.log("I received a request!");

    next()
}

app.use(cors())

app.use(express.json())

app.use(debug)

app.get("/heroes", (req, res) => {
    res.json(superHeros)
})

app.get("/heroes/:name", (req, res) => {
    const nameHero = req.params.name.toLowerCase()

    for (var i = 0; i < superHeros.length; i++) {

        if (superHeros[i].name.toLowerCase() === nameHero) {
            res.json(superHeros[i])
        }
    }

    res.json({
        message: "Hero not found"
    })
})

app.get("/heroes/:name/powers", (req, res) => {
    const nameHero = req.params.name.toLowerCase()

    const selectedHero = superHeros.find(elem => {
        return nameHero === elem.name.toLowerCase()
    })

    res.json(selectedHero.power)
})

const transformName = (req, res, next) => {
    // console.log("transformName req.body ", req.body);
    // console.log("transformName req.body.name ", req.body.name);

    if (req.body.name === undefined) {
        res.json({
            erroMessage: "To add a hero send at least he's name"
        })
    } else {
        req.body.name = req.body.name.toLowerCase()

        next()
    }

}

app.post("/heroes", transformName, (req, res) => {
    // console.log(req.body);

    const hero = req.body

    superHeros.push(hero)
    const arrayToVerify = superHeros.filter(hero => hero.name.toLowerCase() === newHeroes.name)

    if (arrayToVerify.length) {
        res.json({ message: "Cet héros existe déja !" })
    } else {
        superHeros.push(newHeroes)
        res.json({ message: "Ok, héros ajouté" })
    }
    
    
})

app.post("/heroes/:name/powers", (req, res) => {
    const nameHero = req.params.name.toLowerCase()

    const selectedHero = superHeros.find(elem => {
        return nameHero === elem.name.toLowerCase()
    })

    if (selectedHero) {


        const heroPower = req.body.power

        selectedHero.powers.push(heroPower)

        res.json({
            message: `Power added! The powers of ${nameHero} are ${selectedHero.power}`
        })
    } else {
        res.json({
            errorMessage: "Hero not found"
        })
    }
})

// app.delete("/heroes/:name",(req,res)=>{

//     res.json()
// })

app.listen(port, () => {
    console.log("Server is listenin at port ", port);
})



