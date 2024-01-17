const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'/CRUD')
const filePath = `${dirPath}/apple.txt`;

//c - create
// fs.writeFileSync(filePath,"this is text for example ");

//r - read
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

// let a = fs.readFileSync(filePath,'utf8');
// console.log(a);

//u - update
//append

// fs.appendFile(filePath,"extra text appended for testing purpose",(err)=>{
//     if(!err) console.log("file updated");
// })

// fs.appendFileSync(filePath," another text added for testing purpose");

// fs.rename(filePath,`${dirPath}/fruits.txt`,(err)=>{
//     if(!err) console.log("file name updated");
// })

// fs.renameSync(filePath,`${dirPath}/apple.txt`);

//d - delete

// fs.unlink(filePath,(err)=>{
//     if(!err) console.log("file deleted");
// })

// fs.unlinkSync(filePath);