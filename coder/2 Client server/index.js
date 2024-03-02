const http = require('http')
const fs = require('fs')

const index = fs.readFileSync('index.html', 'utf-8')
const data = {agr:5}

const server = http.createServer((req,res)=>{
    console.log(req.url)

    switch(req.url){
        case '/':
        res.setHeader('Content-Type', 'text/html')
        res.end(index);
        break; 
        case '/api':
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
        break;
        default :
        res.writeHead(404,'Not Found');
        res.end();
        return;
 
    }
    //res.setHeader('Content-Type', 'application/json')
    //res.setHeader('Content-Type', 'text/html')
    //res.end(JSON.stringify(data))
    res.end(index);
    
});

server.listen(8080)
