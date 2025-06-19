//creating first node-server
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url,req.method, req.headers);
  //process.exit();//until first request is not completed, server will not exit
});
/*
function requestListner(req, res) {
  //     fun call back
  console.log(req);
}
http.createServer(requestListner);
*/

//but server is not running yet(listening)
const PORT = 3000;
//now we will listen to the server
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
