const http = require("http");//creating first node-server

const server =http.createServer((req, res) => {
console.log(req.url, req.method, req.headers); 

res.write('<html><head><title>Myntra</title></head><body><nav><ul><li><a href="/men">Men</a></li><li><a href="/women">Women;</a></li><li><a href="/kids">&#x1F469;</a></li><li><a href="/cart">🛒</a></li></ul></nav></body></html>'); //write the response

}); 
server.listen(3002, () => { //now we will listen to the server
  //but server is not running yet(listening)
  console.log("Server is running on http://localhost:3002");
});