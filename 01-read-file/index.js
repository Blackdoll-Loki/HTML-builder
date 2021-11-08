const fs = require('fs');
const path = require('path');
let readPath = path.join(__dirname, 'text.txt');

const readStream = fs.createReadStream(readPath, { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log(chunk);
});