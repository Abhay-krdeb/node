const fs = require("fs");
//core module
console.log("Abhay Kumar Deb");
fs.writeFile("output.txt", "Writing dile", (err) => {
  if (err) {
    console.log("Error occured:", err);
  } else {
    console.log("File written successfully");
  }
});
/*
 */
