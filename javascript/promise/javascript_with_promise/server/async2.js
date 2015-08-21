var fs = require('fs');
var timestamp = new Date().toString();
fs.writeFile('date2.txt', timestamp, function (err) {
    if (err) throw err;
    fs.readFile('date2.txt', function (err, contents) {
        if (err) throw err;
        console.log(contents == timestamp);
        console.log('Checking the contents');
    });
});
console.log('I am the last line of the script');
// 2 // 3
// 1