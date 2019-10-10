// file system module: interacting with files
// ------------------------------------------ //

// importing file system (fs)
const fs = require('fs');

// creating a file using the writeFile method that takes 3 params
// 1st param: name of the file, 2nd param: content of the file, 3rd param: callback func with 'err' as param
fs.writeFile('fs_example.txt', 'this file is created by fs', (err) => {
    if (err)
        console.log(err);
    else
        console.log('file created');
});

// renaming a file using the rename method that takes 3 params
// 1st param: old name, 2nd param: new name, 3rd param: callback func with 'err' as param
fs.rename('fs_example.txt', 'fs_test.txt', (err)=>{
    if (err)
        console.log(err);
    else
        console.log('file renamed successfully!');
});

// adding new content to the end a file using the appendFile method that takes 3 params
// 1st param: name of the file, 2nd param: new content, 3rd param: callback func with 'err' as param
fs.appendFile('fs_test.txt', ' I AM AN APPENDED TEXT', (err) => {
    if (err)
        console.log(err);
    else
        console.log('new content appended successfully!');
});

// reading a file using the readFile method that takes 3 params
// 1st param: name of the file, 2nd param: encoding type, 3rd param: callback func with 'err' & 'file' as params
fs.readFile('fs_test.txt', 'utf8', (err, file) => {
    if (err)
        console.log(err);
    else
        console.log(file);
});

// deleting a file using the unlink method that takes 2 params
// 1st param: name of the file, 2nd param: callback func with 'err' as param
fs.unlink('fs_test.txt', (err) => {
    if (err)
        console.log(err);
    else
        console.log('file deleted successfully!');
});