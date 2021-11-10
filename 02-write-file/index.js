const fs = require('fs');
const path = require('path');
const readLine = require('readline');
const process = require('process');
const {stdin, stdout, exit} = process;


let writingPath = path.join(__dirname, 'input.txt');
const writeStream = fs.createWriteStream(writingPath);
console.log('write something');

let rl = readLine.createInterface({input: stdin});
process.on('SIGINT', function(){
    console.log('\nGoodbuy');
    exit();
});

rl.on('line', (text) => {
    writeStream.write(text);
    writeStream.write('\n');
    if(text === 'exit'){
        console.log('Goodbuy');
        exit();
    }
});



//console.log('Write anything');
//readStream.pipe(writeStream);

