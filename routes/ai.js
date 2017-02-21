var express = require('express');
var router = express.Router();

// fullfillment post request
router.post('/', function(req, res, next) {
    console.log(req.body);
    res.json({
        "fulfillment": {
            "speech": "Today in Boston: Fair, the temperature is 37 F",
            "source": "apiai-weather-webhook-sample",
            "displayText": "Today in Boston: Fair, the temperature is 37 F"
        }
    });
});

module.exports = router;
