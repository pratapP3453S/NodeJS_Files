const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/pratap");
const schema = new mongoose.Schema({
    name:String,
    surname:String,
    fav_lang:String,
    start_year:Number
})
async function saveData(){
    let model = mongoose.model('rutujas', schema);
    let setData = new model({name:"nitin", surname:"gupta", fav_lang:"bhojpuri", start_year:"2006"});
    let result = await setData.save();
    console.log(result);
}
// saveData();

async function updateData(){
    let model = mongoose.model('rutuja', schema);
    let data = await model.updateOne(
        {name:"nitin"},
        {$set:{start_year:2005}}
    )
    console.log(data);
}
// updateData();

async function readData(){
    let model = mongoose.model('rutujas', schema);
    let data = await model.find({});
    console.log(data);
}
// readData();

async function deleteData(){
    let model = mongoose.model('rutujas', schema);
    let data = await model.deleteOne(
        {name:"nitin"}
    )
    console.log(data);
}
deleteData();