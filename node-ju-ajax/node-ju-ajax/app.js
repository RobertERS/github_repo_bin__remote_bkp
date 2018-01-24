var http = require('http');
var fs = require('fs');
var port = 7555;
var randomNumber = function(){
    return Math.floor(Math.random()*3);
}

http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    var html = fs.readFileSync('../index.html', 'utf8');
    html = html.replace('{ Random number }', randomNumber);
    res.end(html);
}).listen(port);

console.log('Server started on port:' + port );