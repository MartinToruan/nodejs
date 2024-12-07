// run:
// $ node first-app.js

const fs  = require('fs');

fs.writeFileSync('hello.txt', 'Hello from Node.js');
console.log('Hello from Node.js');