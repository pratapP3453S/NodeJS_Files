const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/home',(_, res)=>{
    const user = {
        name:'pratap',
        surname:'panigrahy',
        email:'pratap@gmail.com',
        familyNames:['pratap','priti','suryakant','shalini']
    }
    res.render('file1',{user});
})
app.listen(4500);