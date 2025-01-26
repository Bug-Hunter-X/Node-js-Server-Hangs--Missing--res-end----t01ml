const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake: forgetting to call 'res.end()'
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Missing res.end() will leave the connection hanging
  //console.log('Request received');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});