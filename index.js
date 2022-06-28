const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Kubernetes!');
});
server.listen(8080, function() {
console.log('Server running on port 8080');
});