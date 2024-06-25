const http = require('http');
const hostname = '127.0.0.1'; // localhost

const port = 3000;
const server = http.createServer((req, res) => {
if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("hello ice tea")
} else  if(req.url === '/ice_tea'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Tea is very hot")
}
else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end("404 Not found")
}
});

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}/`);
});
