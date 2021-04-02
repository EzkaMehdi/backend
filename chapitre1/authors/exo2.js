const express = require('express');
const app = express();
const port = 8000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
// app.get('/', (req, res) => {
//     res.send('Authors API');
//   });
app.get('/', function (req, res) {
    var auteurs = req.params.auteurs;
    var auteur = "";
    

    switch (auteurs) {
        case "/authors/1/":
            auteur = "Lawrence Nowell, UK"
            break;

        case "/authors/2/":
            auteur = "William Shakespear, UK"
            break;

        case "/authors/3/":
            auteur = "Charles Dickens, US"
            break;

        case "/authors/4/":
            auteur = "Oscar Wilde, UK"
            break;

        default:
            auteur = "not found"
            break;
    }

    res.json({
        auteurs: auteur,
        
    });
});


app.listen(port, function () {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});ikit