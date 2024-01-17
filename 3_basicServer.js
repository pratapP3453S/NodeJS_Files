const http = require('http');

http.createServer((req, resp)=>{
    resp.write("hello this is pratap speaking...");
    resp.end();
}).listen(4900);

function another(req, resp){
    resp.write("hello bhai sarayane...");
    resp.end();
}
http.createServer(another).listen(5005);