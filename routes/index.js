var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
var db = admin.database();
var ref = db.ref("server/maintenance");

router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    res.render('dashboard', { title: 'Property Pro' , data: data});
  })
});

router.get('/maintenance', function(req, res, next) {
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    res.render('maintenance', { title: 'Property Pro' , data: data});
  });
});

router.get('/reports', function(req, res, next) {
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    res.render('reports', { title: 'Property Pro' , data: data});
  });
});

module.exports = router;
