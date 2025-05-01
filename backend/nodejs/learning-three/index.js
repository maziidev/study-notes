// path module in nodejs

const path = require('path');

console.log(path.dirname(__filename)); // for directory name
console.log(path.basename(__filename)); // for file name

console.log(path.extname(__filename)); // for file extension

// joining paths
const joinPath = path.join('/user', 'documents', 'node' + 'js');
console.log(joinPath); // for joining path

// resolve paths
const resolvePath = path.resolve('user', 'documents', 'node');
console.log(resolvePath); // for resolving path