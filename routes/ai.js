var express = require('express');
var router = express.Router();

// fullfillment post request
router.post('/', function(req, res, next) {
    console.log(req.body.result.parameters);
    res.json(req.body.result.fulfillment);
});

module.exports = router;
