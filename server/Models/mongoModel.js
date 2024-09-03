const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    email: String,
    password: String
})

const mongoModel = mongoose.model("employees", EmployeeSchema)

module.exports = mongoModel