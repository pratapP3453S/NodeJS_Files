const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"3453",
    database:"newdb",
});
conn.connect((err)=>{
    if(err){console.log("error");console.log(err);}
     
    else {console.log("connected");}
});
conn.query('select * from shalaka', (error, result)=>{
    if(!error) {
        console.log(result);
    }
    else{
        error
    }
});