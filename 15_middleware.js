const express = require('express');
const app = express();

const filter=(req, res, next)=>{
    if(!req.query.age) res.send('Please enter your age...');
    else if(req.query.age<18) res.send('You cant allowed in this website...');
    else res.send(next());
}

app.use(filter);

app.get('/',(req,res)=>{
    res.send("Welcome to Home page");
})

app.get('/about',(req,res)=>{
    res.send("Welcome to users page");
})

app.listen(4600);