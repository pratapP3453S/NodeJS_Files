const EventEmitter = require('events');
const express = require('express');
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("eventEmit", ()=>{
    count++;
    console.log("event called "+count+" times...");
})

app.get('/', (req, resp)=>{
    resp.send('event called...');
    event.emit("eventEmit");
})

app.listen(9090);

