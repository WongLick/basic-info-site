const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const routes = {
  "/": "./index.html",
  "/about": "./about.html",
  "/contact-me": "./contact-me.html",
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  //default to 404 if route not found
  const filename = routes[pathname] || "./404.html";
  const contentType = "text/html";

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.write(data);
    return res.end();
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
