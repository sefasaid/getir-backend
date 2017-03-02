/**
 * Created by sefasaid on 03/03/2017.
 */

// index.js

// BASE STRUCTURE
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

//Connecting to mongodb from getirdb
mongoose.connect('mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon');

//importing our schema
var Records     = require('./models/response');



// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:3000/)
router.post('/', function(req, res) {
    Records.find({"key":req.body.key},'-_id', function(err, data) {
        if (err){
            res.send(err);
        }
        res.json(data);
    });
});
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);