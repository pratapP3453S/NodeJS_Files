const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'files');
console.warn(dirPath);

// for(let i=0; i<5; i++){
//     fs.writeFileSync(`${dirPath}/fileNo${i}.txt`,"this is the universal text used for all files in the files directory for example purpose");
// }

fs.readdir(dirPath,(err,fileName)=>{
    fileName.forEach((items)=>{
        console.log(items);
    })
})
