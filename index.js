// Load Node modules
var express = require('express');
var path = require('path');
const PORT = process.env.PORT || 3000
// Initialise Express
var app = express();
// Render static files
app.use(express.static(path.join(__dirname + '/public')));
// Port website will run on
app.listen(PORT);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
