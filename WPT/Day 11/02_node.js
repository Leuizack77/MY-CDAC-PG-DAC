let http = require('http');

const server = http.createServer( function(req, res){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.end('Hello Abhi')
});

server.listen(8080);