import express from 'express';
import cors from "cors";
import db from "./config/DATABASE.js"
import response from './response.js';
import bodyParser from 'body-parser';
// import Route from './route/Route/js'
import UserRoute from "./route/UserRoute.js"

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.use(express.json());

app.use(UserRoute)

app.get('/kategori', (req , res) => {
    db.query("SELECT * FROM kategori", (err, result) => {
        response(200, result, "get all data from kategori", res )
    })
})

app.listen(5000, ()=> console.log('server up and running'))