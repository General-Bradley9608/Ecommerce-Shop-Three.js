const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const schema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const database = mongoose.model("UserDatabase",schema);
module.exports = database;