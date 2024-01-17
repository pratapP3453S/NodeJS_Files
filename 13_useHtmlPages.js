const path = require('path');
const express = require('express');
const app = express();

const filePath = path.join(__dirname,'public');

app.use(express.static(filePath));

app.listen(5500);