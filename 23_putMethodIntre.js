const connect = require('./mongoNodeConnectionCode');
const express = require('express');
const app = express();

app.use(express.json());

app.put('/:name', async(req, resp)=>{
    let conn = await connect('pratap', 'anjali');
    let data = await conn.updateOne(
        {name: req.params.name},
        {$set:req.body}
    )
    resp.send(data);
})

app.listen(9090);