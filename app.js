// Load Node modules
var express = require('express');
var path = require('path');
const ejs = require('ejs');
// Initialise Express
var app = express();
console.log(__dirname)
// Render static files
app.use(express.static(path.join(__dirname + 'views'), {
    index: false,
    immutable: true,
    cacheControl: true,
    maxAge: "30d"
}));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(8080);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('./pages/index');
});