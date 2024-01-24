const express = require ('express');
const server = express();
require ('dotenv').config();

//server.use(logger());

server.get('/person',(req, res)=>{
    let personName = req.query.name;
    let age = req.query.age;
    res.json({name:personName,age})
})



server.listen(process.env.PORT,function(){
    console.log('Server is running.')
}) 



// yt req.query
// link -> https://www.youtube.com/watch?v=vnRsFtwWu8M&list=PL2PkZdv6p7Zmu51_FBoNDcv8Bk8bXODvH&index=8
