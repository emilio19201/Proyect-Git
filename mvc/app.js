import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./backend/controller/reporbados.js";

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() => {
    console.log("Funciona la bd")
})
.catch((error) => {
    console.log("No funciona la bd", error) 
})
const app = express ();
app.use(cors()); 

app.listen(4000,()=>{
    console.log("El servidor se esta escuchando bien ")
});

test()
 




