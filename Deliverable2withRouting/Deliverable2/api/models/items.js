const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const schema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    ID:{
        type: String,
        required: true
    }
})

const database = mongoose.model("ItemsInCartDatabase",schema);
module.exports = database;