var fs = require('fs');
var timestamp = new Date().toString();
var contents;
fs.writeFile('date2.txt', timestamp);
fs.readFile('date2.txt', function (err, data) {
    if (err) throw err;
    contents = data;
    console.log('Checking the contents');
});

console.log(contents == timestamp);
console.log('I am the last line of the script');