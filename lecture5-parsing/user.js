const http = require("http");
const fs = require("fs");


const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" />'
    );
    res.write('<br><input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = []; // Initialize an empty array to collect data chunks
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
      const params = new URLSearchParams(fullbody);//key value pair
      // const bodyobject={};
      // for (const [key, value] of params) {
      //   bodyobject[key] = value;
      // }
      const bodyobject= Object.fromEntries(params);
      console.log(bodyobject);
          fs.writeFileSync("user.txt", JSON.stringify(bodyobject));

    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = userRequestHandler;