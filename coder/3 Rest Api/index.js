const express = require('express')
const app = express();
const port = 8080;

const products = require('./data.json');

// Endpoins
app.get('/products',(req,res)=>{
    //res.send('Hii')
    res.json(products)
})

app.listen(port,()=>{
    console.log(`server is started on https://localhost:${port}`)
})