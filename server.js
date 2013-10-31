var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('the quick brown fox');
  res.end('Hello Http');
  
});
server.listen(8080);