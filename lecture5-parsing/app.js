const http = require('http');
const requestHandler = require('./user');

const server = http.createServer(requestHandler);

const PORT = 3008;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});