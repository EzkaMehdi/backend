const express = require("express")
const cors = require("cors")
const { dataMovies } = require("./dataMovie.js")

const app = express()

app.use(cors())

const port = 8001



app.get("/country/:countryName", (req, res) => {
 

    const countryName = req.params.countryName

  

    const dataCountry = countries.find(elem => {
        console.log("countries.find current elem", elem);

        return elem.name.toLowerCase() === countryName.toLowerCase()
        
    })

    res.json(dataCountry)
})

app.get("/countries/search/:valueToSearch", (req, res) => {
    
    const valueToSearch = req.params.valueToSearch.toLowerCase()

    const countriesFound = countries.filter(elem => {

        return elem.name.toLowerCase().includes(valueToSearch)
    })

    console.log("countriesFound", countriesFound);

    res.json(countriesFound)
})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})