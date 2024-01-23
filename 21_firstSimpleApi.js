const connect = require('./mongoNodeConnectionCode');
const express = require('express');
const app = express();

app.get('/', async (req, resp) => {
    let conn = await connect('pratap', 'anjali');
    let data = await conn.find({}).toArray();
    resp.send(data);
    console.log(data);
})
app.listen(8080);