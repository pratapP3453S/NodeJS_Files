const express = require('express');
require('./configFile');
const product = require('./productFile');
const app = express();

app.use(express.json());

app.post('/postdata', async (req, resp)=>{
    let data = new product(req.body);
    let result = await data.save();
    resp.send(result)
    console.log(result);
})

app.get('/getdata', async (req, resp)=>{
    let data = await product.find({});
    resp.send(data);
    console.log(data);
})

app.put('/putdata/:_id', async (req, resp)=>{
    let data = await product.updateOne(
        req.params,{$set:req.body}
    )
    resp.send(data);
    console.log(data);
})

app.delete('/deletedata/:_id', async(req, resp)=>{
    let data = await product.deleteOne(
        req.params
    )
    resp.send(data);
    console.log(data);
})

app.listen(8080);