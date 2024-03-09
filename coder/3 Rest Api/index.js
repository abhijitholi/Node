const express = require('express')
const app = express();
const port = 3005;

const products = require('./data.json');

// body Parser
app.use(express.json());

// Endpoins

// Read GET /products
app.get('/products',(req,res)=>{
    //res.send('Hii')
    res.json(products)
})

app.get('/products/:id',(req,res)=>{
    //res.send('Hii')
    console.log(req.params.id)
    const id = +req.params.id;
   const Product = products.find(p=>p.id===id)
    res.json(Product)
})

app.get('/products/Api/:postId',(req,res)=>{
    //res.send('Hii')
    console.log(req.params.postId)
    const postId = +req.params.postId;
   const Product = products.find(p=>p.postId===postId)
    res.json(Product)
})

app.post('/products/',(req,res)=>{
    //res.send('Hii')
    console.log(req.body)
    res.json({type:'POST'})
   
    
})

 

app.listen(port,()=>{
    console.log(`server is started on https://localhost:${port}`)
})