const connect = require('./mongoNodeConnectionCode');
const express = require('express');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.delete('/', async(req, resp)=>{
    let conn = await connect('pratap', 'anjali');
    let data = await conn.findOneAndDelete(req.body);
    resp.send(data);
})

app.delete('/:id', async (req, resp)=>{
    let conn = await connect('pratap', 'anjali');
    let data = await conn.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    resp.send(data);
})

app.listen(9090);