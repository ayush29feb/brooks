var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
var db = admin.database();
var ref = db.ref("server/maintenance");

/* GET home page. */
router.get('/', function(req, res, next) {
  ref.on('value', function(snapshot){
    console.log(snapshot.val());
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
