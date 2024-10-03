// server.js

const { createServer } = require("http");
const next = require("next");
require("dotenv").config();
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // If you have custom routes, you can handle them here
    handle(req, res);
  }).listen(80, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost");
  });
});
