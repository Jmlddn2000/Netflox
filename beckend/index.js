import express from "express"
import mongoose from "mongoose";
import route from "./route/route.js";
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/netflox", {
   useNewUrlParser : true,
   useUnifiedTopology : true
});

const db = mongoose.connection;
const port = 3000

db.on("error", (error) => console.log(error))
db.once('open', () => console.log('Database Connected'))

app.use(express.json());
app.use(route);





app.listen(port, () => console.log("server up running")) 