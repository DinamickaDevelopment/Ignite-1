// встроенные модули nodejs импортируются без символов './' или '../'
var fs = require('fs');

fs.writeFileSync('test.txt', 'Built-in module example!');

console.log(fs.readFileSync('test.txt').toString()); 