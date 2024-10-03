const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

require('dotenv').config();

const port = process.env.PORT || 443;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// SSL certificate paths
const options = {
  key: fs.readFileSync('./private.key'),
  cert: fs.readFileSync('./certificate.crt'),
  ca: fs.readFileSync('./ca_bundle.crt'),
//  passphrase: '123456'
};

app.prepare().then(() => {
  createServer(options, (req, res) => {
    // Be sure to pass both req and res to handle
    // In case you're serving static assets with a custom server
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://localhost:${port}`);
  });
});
