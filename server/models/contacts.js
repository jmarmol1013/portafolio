let mongoose = require('mongoose');

let contactModel = mongoose.Schema({
    name : String,
    phone: Number,
    mail : String
},{
    collection : "contacts"
})

module.exports = mongoose.model('contact',contactModel);