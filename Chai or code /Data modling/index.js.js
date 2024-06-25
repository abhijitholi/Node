const express = require ('express');
const app = express();
require('dotenv').config();

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/login', (req,res)=>{
    res.send("Login Page");
})

app.get('/twtter',(req,res)=>{
    res.send('<h1>This is twtter<h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai or code</h2>")
})

app.listen(process.env.Port,()=>{
    console.log(`server is started on ${process.env.Port}`)
})



