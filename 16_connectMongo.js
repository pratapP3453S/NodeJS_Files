const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "pratap";

async function getData(){
    let connection = await client.connect();
    let db = connection.db(database);
    let cname = db.collection('anjali');
    let data = await cname.find({}).toArray();
    console.log(data);
}
getData();

