const product = require('./27_Post_get_put_deleteAPImongoose/productFile');
require('./27_Post_get_put_deleteAPImongoose/configFile');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/brand/:key', async (req, resp)=>{
    let data = await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"fav_lang":{$regex:req.params.key}}
            ]
        }
    )
    console.log(data);
    resp.send(data);
})
app.listen(8080);