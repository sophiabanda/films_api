const express = require("express"),
  http = require("http"),
  fs = require("fs"),
  url = require("url"),
  path = require("path"),
  morgan = require("morgan");

const app = express();
app.use(morgan("common"));

http
  .createServer((request, response) => {
    let addr = request.url,
      q = url.parse(addr, true),
      filePath = "";

    fs.appendFile(
      "log.txt",
      "URL: " + addr + "\nTimestamp: " + new Date() + "\n\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Added to log.");
        }
      }
    );
    if (q.pathname.includes("documentation")) {
      filePath = __dirname + "/documentation.html";
    } else {
      filePath = "index.js";
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        throw err;
      }

      response.writeHead(200, { "Content-type": "text/html" });
      response.write(data);
      response.end();
    });
  })
  .listen(8080),
  console.log("My server is running on port 8080");
