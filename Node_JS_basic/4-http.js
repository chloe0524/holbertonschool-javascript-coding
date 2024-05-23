const http = require('http');

const expressVpn = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
}).listen(1245, () => console.log('Server running at http://localhost:1245/'));

module.exports = expressVpn;
