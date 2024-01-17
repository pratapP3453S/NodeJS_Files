const fs = require('fs');
fs.writeFileSync("examplefile1.txt","this is a demo file...");

console.log("-->>", __filename);
console.log("-->>", __dirname);