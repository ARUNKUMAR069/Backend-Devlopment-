const http = require('http');


const server = http.createServer((req,res) => {
    // .end() is used to send a response to the client 


    // Routing

    if (req.url === '/') {
        res.end('welcome to the home page');
    }
    else if (req.url === '/about') {
        res.end('about me');
    }
    else if (req.url === '/contact') {
        res.end('contact me at 1234567890');
    }
    else if (req.url === '/help') {
        res.end('help me');
    }
    else {
        res.end('not found');
    }
    console.log(req.url);
    // Routing ends here
});
server.listen(3000)
 