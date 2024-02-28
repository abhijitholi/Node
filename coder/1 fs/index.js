 const fs = require('node:fs');


const t1= performance.now(); 
fs.readFile('demo.txt', 'utf-8',(err, txt)=>{
    console.log(txt);
});

const t2= performance.now(); 
//console.log('hiii')
console.log(t2-t1);
