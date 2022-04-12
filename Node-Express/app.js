//--------------------------------FILE SYSTEM-------------------------------------
// const fs = require("fs");

// const name = "Arusha";
// fs.writeFile("user-data.txt", "Name: " + name, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("WROTE FILE");
//   }
// });

//----------------------------------NODE JS------------------------------------------
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("INCOMMING REQUEST");
//   console.log(req.method, req.url);

//   if (req.method === "POST") {
//     console.log("NOOOO");
//     let body = "";
//     req.on("end", () => {
//       console.log(body);
//       const userName = body.split("=")[1];
//       res.end("<h1>" + userName + "</h1>");
//     });
//     req.on("data", (chunk) => {
//       body += chunk;
//     });
//   } else {
//     res.setHeader("Content-Type", "text/html");
//     res.end(
//       "<form method='POST'><input name='username' type='test'/><button type='submit'>submit</button></form>"
//     );
//   }
// });

// server.listen(5000);

//----------------------------------EXPRESS JS------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user", (req, res, next) => {
  res.send("<h1> User: " + req.body.username + "</h1>");
});

app.get("/", (req, res, next) => {
  res.send(
    "<form action='/user' method='POST'><input name='username' type='test'/><button type='submit'>submit</button></form>"
  );
});

app.listen(5000);
