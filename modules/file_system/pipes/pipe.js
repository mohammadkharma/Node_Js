// pipe:
// ----- //

// 'pipe' is a a simpler way to use streams

// importing file system (fs)
const fs = require('fs');

// creating a readable stream and passing to it the file's name we want to read and encoding type
const readStream = fs.createReadStream('./example.txt', 'utf8');

// creating a writable stream and passing to it the file name we want to create and write in it
const writeStream = fs.createWriteStream('./example2.txt');

// this is the normal way of using stream to send data to another file
// readStream.on('data', (chunk) =>{
//     writeStream.write(chunk);
// });

// 'pipe' takes what the readStream (source) gives us and send it to the writeStream (destination)
readStream.pipe(writeStream);

// we can also chain pipes