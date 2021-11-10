const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'secret-folder');

fs.readdir(filePath,{ withFileTypes: false}, (err, files) => {
    if(err){
        console.log(err);
    } else{
        console.log('\nCurrent directory file names');
        files.forEach((file) => {
                let name = file.replace(/.\w+$/, '');
                let ext = path.extname(file).replace('.', '');
                fs.stat(path.join(filePath, file), (err, stats) => {
                    if(err){
                        console.log(err);
                    } else if(stats.isFile()){
                        console.log(`${name} - ${ext} - ${stats.size/1000}kb`);
                    }
                });
        });
    }
});
