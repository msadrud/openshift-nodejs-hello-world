const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from k8s cli-build!');
});
server.listen(8080, function() {
console.log('Server running on port 8080');
});
