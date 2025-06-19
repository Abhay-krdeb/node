//creating first node-server
const http = require("http");
const fs= require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Enter your details Server: </h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write(
      "<input type='text' name='username' placeholder='Enter your name'/><br>"
    );
    res.write("<br/>");
    res.write("<label for='gender'>Gender:</label>");
    res.write("<br/>");

    res.write("<label for='male'>Male</label>");
    res.write(
      "<input type='radio' id='male' name='gender' value='male'/> Male"
    );
    res.write("<br/>");

    res.write("<label for='female'>Female</label>");
    res.write(
      "<input type='radio' id='female' name='gender' value='female'/> Female"
    );
    res.write("<br/>");

    res.write("<input type='submit' value='Submit'/>");

    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end(); //end the response
  } else if (
    req.url.toLocaleLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("user-details.txt", "Abhay Kumar Deb");
    res.statusCode = 302; //redirecting to home page
    //we can get the data from the request body
    res.setHeader("Location", "/");//redirecting to home page
    

  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Thank you visit again</h1></body>");
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
