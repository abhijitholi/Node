// import File System 
var fs = require ('fs');
// This is a function for the Make file.
var a = 10;
var b = 20; 
var c = a+b;

// this function is the asynchronous function         
var f =  fs.writeFileSync('day2.txt','>>>>>>>>>>>>>>Day 3>>>>>>>>>>>>');
console.log('File is write',);


// this function is the non asynchronous function throw error
// var f1 =  fs.writeFile('demo.txt','>>>>>>>>>>>>>>Day 2>>>>>>>>>>>>');
// console.log('File is write', f1);


// CallBack Function 


var data = fs.readFile('day2.txt', function(error,data){
    
    console.log('Data Read Here', data.toString())
})
console.log(data);

