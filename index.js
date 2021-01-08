const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');

let config = JSON.parse(fs.readFileSync('etc/config.json'));

const app = express();

const PORT = 8080;
const HOST = "localhost";

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(morgan('dev'));

app.use('/octopus', createProxyMiddleware({
    target: 'https://api.octopus.energy',
    changeOrigin: true,
    pathRewrite: {
        [`^/octopus`]: '',
    },
  }));

 app.use('/public', express.static('public')); 

 app.get('/', function (req, res) {
    res.render('home', {
        layout: false,
        properties: config.properties
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
