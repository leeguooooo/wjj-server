var express = require('express');
const app = express();

app.get('/demo1',function(req, res){
    console.log(req.query);
    res.send();
})
