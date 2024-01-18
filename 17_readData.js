const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnect(cname){
    let connect = await client.connect();
    let db = connect.db('pratap');
    return db.collection(cname);
}

// method - 1
// dbConnect('anjali').then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data);
//     })
// })
// console.log(dbConnect('anjali'));

// method - 2
// async function runn(){
//     let data = await dbConnect('rutuja');
//     let printData = await data.find({}).toArray();
//     console.log(printData);
// }
// runn();