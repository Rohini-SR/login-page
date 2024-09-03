const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoModel = require('./Models/mongoModel')

const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/employee')

app.post('/login', (req,res)=>{
    mongoModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.json(err))
})

app.listen(4000,()=>{
    console.log('server is running')
})




