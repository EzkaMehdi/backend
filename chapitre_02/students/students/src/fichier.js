const express = require("express")
const cors = require("cors")

const port = 8000

const app = express()

app.use(cors())
app.use(express.json())

const students = []

app.get("/students", (req, res) => {
    res.json(students)
})

app.post("/students", (req, res) => {
    const newStudent = req.body

    students.push(newStudent)

    res.json({
        message: "post students ok",
        newStudent
    })
})

app.get("*", (req, res) => {
    res.json({
        message: "The route doesn't exist"
    })
})

app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})
// const express = require('express');
// const app = express();

// const port = 8000;
// app.listen(port, () => {
//   console.log('Server started on port: ' + port);
// });


// const students = ["Mehdi","Moncef","Fethy","Suleman","Sabrina","Asma","Karim","Bakagnan","Amir","Lionel","Ikram","Faruk","Mugilan","Francisco","Lucas","Rocio","Fasulu","Abdou","Axel"]
// app.get('/students', (req, res) => {
//     res.json(students);
//   });

//   app.post("/students", (req,res) => {
//     const newStudents = req.body

//     students.push(newStudents)

//     res.json(students)
// })