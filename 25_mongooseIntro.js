const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/pratap");
const schema = new mongoose.Schema({
    name:String,
    price:Number,
});

async function main(){
    const Productmodel = mongoose.model("anjali", schema);
    let data = new Productmodel({name:"v8", price:1000});
    let result = await data.save();
    console.log(result);
}
main();