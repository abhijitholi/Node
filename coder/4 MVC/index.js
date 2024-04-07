const express = require('express')
const server = express();
const port = 3005;
server.use(express.json())
const Prod = require('./Api/V1/routes/Routes')

server.use('/products', Prod.ProductRouter)
server.listen(port,()=>{
    console.log(`server is started on http://localhost:${port}`)
})