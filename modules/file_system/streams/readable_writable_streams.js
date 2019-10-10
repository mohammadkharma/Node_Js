// streams:
// ------- //

// streams allow us to read and write data in chunk instead or all at once
// which means that there is no need to wait until the whole data load since the data are divided into chunks (small parts)

// importing file system (fs)
const fs = require('fs');

// creating a readable stream and passing to it the file's name we want to read and encoding type
const readStream = fs.createReadStream('./example.txt', 'utf8');

// creating a writable stream and passing to it the file name we want to create and write in it
const writeStream = fs.createWriteStream('./example2.txt');

// attaching 'data' event to the readable stream that is invoked every time we receive a chunk of data
// the callback func takes the chunk data as a param
// then we are sending every chunk to the write stream to write it by using the method 'write'
readStream.on('data', (chunk) =>{
    writeStream.write(chunk);
});