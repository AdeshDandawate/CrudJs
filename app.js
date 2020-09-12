const express = require("express")
const mongoose = require("mongoose")


const url= 'mongodb://localhost/AlienDBex' 
const app = express()
app.use(express.json())

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',()=>{
    console.log("Connected...");
})

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)



app.listen(9000,()=>{
    console.log("Server Started and listening on 9000")
})