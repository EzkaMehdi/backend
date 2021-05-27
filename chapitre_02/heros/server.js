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

