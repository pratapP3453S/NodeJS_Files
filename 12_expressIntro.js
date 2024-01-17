const express = require('express');
const app = express();
const app2 = express();

app.get('',(req,resp)=>{
    resp.send("Welcome, to my website.");
})
app.get('/home',(req, res)=>{
    res.send("feeding dog");
})
app.listen(4000)


app2.get('/useReq',(req, res)=>{
    res.send("Welcome to my page "+req.query.name);
})
app2.listen(4500);



