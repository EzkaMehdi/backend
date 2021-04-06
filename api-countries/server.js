const express = require('express');
const app = express();
const port = 8000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
app.get('/countries', function (req, res)  {
    var pays = ["Maroc","Algerie","Tunisie","Mauritanie","Egypte"]
    res.send(pays);
  });