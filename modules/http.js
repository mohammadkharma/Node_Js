// http:
// ----- //

// http module allows us to create a web server with node js
const http = require('http');

// the method 'createServer' provide an http server object and takes 2 params
// 1st param: request, 2nd param: response
// the method 'write()' defines what to send back to the client as a response
// the method 'end()' is actually for sending the response back
// 'url' is a property from the request object
const server = http.createServer((req, res) => {
    if (req.url === '/') { 
        res.write('hello world from node js, welcome to root domain!');
        res.end();
    }
    else {
        res.write('this is not the root domain!');
        res.end();
    }
});

// defining which port the server should listen to
server.listen(3000);

// now we can run the app and display the response in the browser under 'localhost:3000'
