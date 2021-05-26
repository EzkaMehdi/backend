const express = require('express');
const app = express();

const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});


const students = ["Mehdi","Moncef","Fethy","Suleman","Sabrina","Asma","Karim","Bakagnan","Amir","Lionel","Ikram","Faruk","Mugilan","Francisco","Lucas","Rocio","Fasulu","Abdou","Axel"]
app.get('/students', (req, res) => {
    res.send(students);
  });

  app.get('/post', (req, res) => {
    res.send(students);
  });