const { Schema, model } = require("mongoose");


const EsquemaReprobados = new Schema({
    name:String,
    apapat:String,
    matricula:String
})

export const modelReprobados = new model("tabla de reprobados", EsquemaReprobados)