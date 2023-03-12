const ln1 = ('./constants.ts')
const ln2 = ('./tsconfig.ts')
const lnlist = [...new Set(ln1, ln2)];

var http = require('http');
http.createServer(function(req,res){
    res.write("Your own personal HTTP server. You may decorate this.");
    res.end();
}).listen(8080);
