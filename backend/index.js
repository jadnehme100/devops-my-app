const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello DevOps!');
});

server.listen(3000, () => console.log('Server test 1 is noww running on port 3000'));