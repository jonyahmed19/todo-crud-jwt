const express = require('express');
const app = express();
const {router} = require('./src/routes/api');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors')

app.use(cors());
app.use(express.json());
dotenv.config({
    path: './config.env'
})

mongoose
    .connect(process.env.DATABASE)
    .then(()=> console.log('DB connected'.cyan))
    .catch((error)=> console.log('DB Error:', error))


app.use("/api/v1", router);


app.use('*', (req, res)=>{
    res.status(404).json({status: "404 Not Found"})
})


module.exports = {
    app
}