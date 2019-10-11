// serving files to the browser with http and file system:
// ------------------------------------------------------- //
const http = require('http');
const fs = require('fs');

// the file to be serve are in the same directory in a folder called 'static_files'

// creating a server
// then reading files from the 'static_files' folder using 'createReadStream' method
// 'writeHead' method defines the response's status as the first param and the file type we are expecting as 2nd param
// then sending the readStream data to the response object which is a writableStream itself through pipe
const server = http.createServer((req, res) => {

    // for the HTML file:
    const readStream = fs.createReadStream('./static_files/index.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    
    // for the json file:
    // const readStream = fs.createReadStream('./static_files/example.json'); 
    // res.writeHead(200, {'Content-type': 'application/json'});

    // for the image:
    // const readStream = fs.createReadStream('./static_files/happy.png');
    // res.writeHead(200, { 'Content-type': 'image/png' });

    readStream.pipe(res);

}).listen(3000);