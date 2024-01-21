var fs = require('fs');
console.log('..............', process.argv[2]);

var filename = process.argv[2];

if (filename) {
    try {
        var data = fs.readFileSync(filename, 'utf8');
        console.log('Here is your data', data);
    } catch (error) {
        console.log('Your file you are trying to read does not exist.');
    }
} else {
    console.log('Please provide a filename as a command line argument.');
}
