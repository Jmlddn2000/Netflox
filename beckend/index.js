import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
// import Route from './route/Route/js'
import UserRoute from "./route/UserRoute.js"

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.use(express.json());

app.use(UserRoute)

app.listen(5000, ()=> console.log('server up and running'))