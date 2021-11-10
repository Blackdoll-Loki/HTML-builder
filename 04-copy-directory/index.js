const fs = require('fs');
const path = require('path');

let newFolderPath = path.join(__dirname, 'files-copy');
let sourseDir = path.join(__dirname, 'files');
fs.readdir(sourseDir, (err, files) => {
    if(err) {
        console.log(err);
    } else{
        fs.exists(newFolderPath, (exist) => {
            if(!exist) {
                fs.mkdir(newFolderPath, (err) => {
                    if(err){
                        console.log(err);
                    }
                    console.log('created new directory');
                });
                files.forEach((file) => {
                    fs.copyFile(path.join(sourseDir, file), path.join(newFolderPath, file),(err) => {
                        if(err){
                            console.log('cant copy file');
                        } else {
                            console.log('file copied');
                        }
                    } )
                });
            } else {
                files.forEach((file) => {
                    fs.copyFile(path.join(sourseDir, file), path.join(newFolderPath, file), (err) => {
                        if(err) console.log(err);
                    });
                });
                fs.readdir(newFolderPath, (err,files) => {
                    if(err){
                         console.log(err)
                    } else {
                        files.forEach((file) => {
                            fs.exists(path.join(sourseDir, file), (exist) => {
                                if(!exist){
                                    fs.rm(path.join(newFolderPath, file), ()=>{
                                        console.log('file deleted, as there is no such file in source directory');
                                    });
                                }
                            });
                        });
                    }
                })
            }
        });
    }
});


