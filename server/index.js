import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRouters from './routes/student.js';
import dotenv from 'dotenv';


const app = express();


app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));
app.use(cors());
app.use('/students',studentRouters);

const CONNECTION_URL = 'mongodb+srv://chanduk:root@cluster0.bo6nkuj.mongodb.net/?retryWrites=true&w=majority'



mongoose.connect(CONNECTION_URL)
.then(()=>console.log("mongdb Connected"))
.catch((err)=>console.log("Err connecting mongodb:",err))


const port = process.env.PORT || 5000;

app.listen(port,()=>console.log("App listening at port:",port))