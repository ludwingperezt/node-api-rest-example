var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
    res.send("Hello world!");
});

app.use(router);

mongoose.connect('mongodb://localhost/tvshows', function (err, res) {
    // body...
    if (err) {
    	console.log('ERROR: connecting to database. '+err);
    }
    app.listen(3000, function() {
        console.log("Node server running on http://localhost:3000");
    });
});

    

