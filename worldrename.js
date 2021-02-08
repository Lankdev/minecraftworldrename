//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'minecraftWorlds');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        console.log(file);
        var isdir = fs.statSync(`${__dirname}/minecraftWorlds/${file}`);
        if (isdir.isDirectory()) {
            fs.access(`${__dirname}/minecraftWorlds/${file}/levelname.txt`, function (error) {
                if (error) {
                } else {
                    fs.readFile(`${__dirname}/minecraftWorlds/${file}/levelname.txt`, 'utf8', function (err, data) {
                        if (err) throw err;
                        console.log(data);
                        var file1 = data.replace(/</g, "");
                        var file2 = file1.replace(/>/g, "");
                        var file3 = file2.replace(/:/g, "");
                        var file4 = file3.replace(/"/g, "");
                        var file5 = file4.replace(/\//g, "");
                        var file6 = file5.replace(/\\/g, "");
                        var file7 = file6.replace(/\|/g, "");
                        var file8 = file7.replace(/\?/g, "");
                        var file9 = file8.replace(/\*/g, "");
                        fs.renameSync(`${__dirname}/minecraftWorlds/${file}`, `${__dirname}/minecraftWorlds/${file9}-${rannum()}`, function (err) {
                            if (err) throw err;
                        });
                    });
                };
            });
        };
    });
});

function rannum() {
    return Math.floor(
        Math.random() * (10000000 - 99999999) + 10000000
    );
};