//FIRST
// const http = require("http");
// const url = require("url");
// const fs = require("fs");
// const path = require("path");
// const express = require("express");
// const app = express();


// const routes = {
//   "/": "./index.html",
//   "/about": "./about.html",
//   "/contact-me": "./contact-me.html",
// };

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname;

//   //default to 404 if route not found
//   const filename = routes[pathname] || "./404.html";
//   const contentType = "text/html";

//   fs.readFile(filename, (err, data) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       return res.end("404 Not Found");
//     }
//     res.writeHead(200, { "Content-Type": contentType });
//     res.write(data);
//     return res.end();
//   });
// });

// const PORT = 8080;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

//EXPRESS
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"), (err) => {
        if (err) {
            console.error("Error sending index.html:", err);
            res.status(500).send("Internal Server Error");
        }
    });
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"), (err) => {
        if (err) {
            console.error("Error sending about.html:", err);
            res.status(500).send("Internal Server Error");
        }
    });
});

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "contact-me.html"), (err) => {
        if (err) {
            console.error("Error sending contact-me.html:", err);
            res.status(500).send("Internal Server Error");
        }
    });
});

// 404 Handling
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`My info site wooo, on port ${PORT}`));


