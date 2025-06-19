//creating first node-server
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      "<body><h1>Hello folks welcome to my Node.js Server!</h1></body>"
    );
    res.write("</html>");
    return res.end(); //end the response
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Check out our new products</h1></body>");
    res.write("</html>");
    return res.end(); //end the response
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Thnank you visit again</h1></body>");
  res.write("</html>");
  return res.end(); //end the response

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
