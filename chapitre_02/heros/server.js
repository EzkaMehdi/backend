import express from 'express';
const app = express();
import cors from 'cors';


app.use(express.json())
app.use(cors())

const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});



const debug = (req, res, next) => {
    console.log("Server request")
    next()
}
const superHeros = [
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricty", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]

app.get("/heroes/:name/powers", (req, res) => {
    res.json(superHeros)
})

app.post("/heroes/", (req, res) => {
    const superHeros = req.body
    res.send('ok,heros ajouté');
});

const transformName = (req, res, next) => {
    
}

