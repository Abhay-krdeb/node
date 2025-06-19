console.log("app2.js is running");
const http = require("http");
const requestHandler= require("./user")
const server = http.createServer(requestHandler);//server making

const PORT = 3009;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});