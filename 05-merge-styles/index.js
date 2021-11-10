const fs = require('fs');
const path = require('path');

let writingPath = path.join(__dirname, 'project-dist', 'bundle.css');
const writeStream = fs.createWriteStream(writingPath);
let readingPath = path.join(__dirname, 'styles');
fs.readdir(readingPath, (err, files) => {
    if(err){
        console.log(err);
    } else {
        files.forEach((file) => {
            fs.stat(path.join(readingPath, file), (err, stats) => {
                if(err){
                    console.log(err);
                } else if(stats.isFile() && path.extname(file) === '.css'){
                    let readStream = fs.createReadStream(path.join(readingPath, file), { encoding: 'utf8'} );
                    readStream.on('data', (chunk) => {
                        writeStream.write(chunk);
                    });
                }
            })
        });
    }
});