const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongodb = require('mongoose');

const penggunaRouter = require('./router/penggunaRouter');

dotenv.config({path:'./config.env'})
const DB = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD)
//mongodb+srv://juaracoding:<password>@cluster0.fqgrm.mongodb.net/<dbname>?retryWrites=true&w=majority

mongodb.connect(DB,{
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:true
}).then(connection =>{
console.log("Koneksi Berhasil")

})

const app = express();
const port = 4000;

app.use((req,res, next)=>{
    req.requestTime = new Date().toISOString();
    next();
})


app.use('/pengguna',penggunaRouter);

app.listen(port,() => {
    console.log("server siap")
})