const http = require('http');

const server = http.createServer((req, resp) => {
    console.log(req);

    // This will terminate the server by unregistered the event listener on the event loop.
    // process.exit();
});

server.listen(3000);