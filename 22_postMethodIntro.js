const connect = require('./mongoNodeConnectionCode');
const express = require('express');
const app = express();

app.use(express.json());

// app.get('/', async (req, resp) => {
//     let conn = await connect('pratap', 'anjali');
//     let data = await conn.find({}).toArray();
//     resp.send(data);
// })

app.post('/', async (req, resp)=>{
    let conn = await connect('pratap', 'anjali');
    let data = await conn.insertOne(req.body);
    console.log(req.body);
    resp.send(req.body);
})
app.listen(9090);