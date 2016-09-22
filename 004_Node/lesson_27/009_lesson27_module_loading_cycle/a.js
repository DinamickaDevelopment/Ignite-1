console.log('a starting');
exports.done = false;
const b = require('./b.js');
console.log('in a, b.done = %j', b.loaded);
exports.done = true;
console.log('a done');