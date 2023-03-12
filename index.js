var http = require('http');
http.createServer(function(req,res){
    res.write("Your own personal HTTP server. You may decorate this.");
    res.end();
}).listen(8080);
