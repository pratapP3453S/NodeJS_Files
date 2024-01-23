const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/pratap");
require('./configFile');

const schema = mongoose.Schema({
    name:String,
    brand:String,
    color:String,
    price:Number
});
module.exports = mongoose.model('rutujas', schema);