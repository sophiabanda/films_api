const express = require("express"),
  path = require("path"),
  morgan = require("morgan");

const app = express();
app.use(morgan("common"));

app.get("/public", (req, res) => {
  res.send("Welcome to Select Films.");
});

app.listen(8080, () => {
  console.log("Your port is listening on 8080.");
});

// http
//   .createServer((request, response) => {
//     let addr = request.url,
//       q = url.parse(addr, true),
//       filePath = "";

//     fs.appendFile(
//       "log.txt",
//       "URL: " + addr + "\nTimestamp: " + new Date() + "\n\n",
//       (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Added to log.");
//         }
//       }
//     );
//     if (q.pathname.includes("documentation")) {
//       filePath = __dirname + "/documentation.html";
//     } else {
//       filePath = "index.js";
//     }
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         throw err;
//       }

//       response.writeHead(200, { "Content-type": "text/html" });
//       response.write(data);
//       response.end();
//     });
//   })
//   .listen(8080),
//   console.log("My server is running on port 8080");
