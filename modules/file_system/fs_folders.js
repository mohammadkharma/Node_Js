// file system module: interacting with folders
// ------------------------------------------ //

// importing file system (fs)
const fs = require('fs');

// creating a folder using the 'mkdir' method that takes 2 params
// 1st param: name of the file, 2nd param: callback func with 'err' as param
fs.mkdir('folder1', (err) => {
    if (err)
        console.log(err);
    else
        console.log('folder1 created successfully');
});

// deleting an empty folder using the 'rmdir' method that takes 2 params
// 1st param: name of the file, 2nd param: callback func with 'err' as param
fs.rmdir('folder1', (err) => {
    if (err)
        console.log(err);
    else
        console.log('folder1 deleted successfully');
});

// ------------------------------------------------------------------------------------------------------- //

// creating a folder and one file inside it
fs.mkdir('folder2', (err) => {
    if (err)
        console.log(err);
    else {
        fs.writeFile('./folder2/example.txt', 'I am a file inside a folder2', (err) => {
            if (err)
                console.log(err);
            else
                console.log('the file example.txt created successfully');
        })
    }
});

// deleting a folder with one file inside it
fs.unlink('./folder2/example.txt', (err) => {
    if (err)
        console.log(err);
    else {
        fs.rmdir('folder2', (err) => {
            if (err)
                console.log(err);
            else
                console.log('folder2 deleted successfully');
        });
    }
});

// ------------------------------------------------------------------------------------------------------- //

// creating a folder and multiple files inside it
fs.mkdir('folder3', (err) => {
    if (err)
        console.log(err);
    else {
        fs.writeFile('./folder3/example1.txt', 'I am a file inside a folder3', (err) => {
            if (err)
                console.log(err);
            else
                console.log('the file example1.txt created successfully');
        });
        fs.writeFile('./folder3/example2.txt', 'I am a file inside a folder3', (err) => {
            if (err)
                console.log(err);
            else
                console.log('the file example2.txt created successfully');
        });
    }
});

// deleting a folder with multiple files inside it using the 'readdir' method that takes 2 params
// 1st param: err, 2nd param: an array of the list of files inside the folder
// to delete them all we loop over the file's array and delete them individually
// and then delete the folder
fs.readdir('folder3', (err, files) => {
    if (err)
        console.log(err);
    else {
        for (let file of files) {
            fs.unlink('./folder3/' + file, (err) => {
                if (err)
                    console.log(err);
                else
                    console.log('file deleted successfully');
            });
        }
    }
});

fs.rmdir('folder3', (err) => {
    if (err)
        console.log(err);
    else
        console.log('folder3 deleted successfully');
});
