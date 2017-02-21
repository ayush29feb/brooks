var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
var db = admin.database();
var ref = db.ref("server/maintenance");

// fullfillment post request
router.post('/', function(req, res, next) {
    ref.push().set(req.body.result.parameters)
    res.json(req.body.result.fulfillment);
});

module.exports = router;
