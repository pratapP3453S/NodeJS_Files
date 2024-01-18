const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnect(databaseName, collectionName){
    let connect = await client.connect();
    let db = connect.db(databaseName);
    return db.collection(collectionName);
}

module.exports = dbConnect;
