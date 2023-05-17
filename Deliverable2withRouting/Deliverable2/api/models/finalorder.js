const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const itemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
});

const schema = new mongoose.Schema({
    
    email:{
        type: String,
        required: true
    },
    fullname:{
        type: String,
        required: true
    },
    homeaddress:{
        type: String,
        required: true
    },
    contactnumber:{
        type: Number,
        required: true
    },
    items:{
        type: [itemSchema],
        required:true
    }

})

const Order = mongoose.model("Order",schema);
module.exports = Order;