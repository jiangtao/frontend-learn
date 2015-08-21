var fs = require('fs');
var timestamp = new Date().toString(); var contents;
fs.writeFileSync('date.txt', timestamp);
contents = fs.readFileSync('date.txt');
console.log('Checking the contents');
console.assert(contents == timestamp, 'timestamp is contents?');
// 1 // 2
console.log('I am the last line of the script'); // 3