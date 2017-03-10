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

router.get('/maintenancerequest', function(req, res, next) {
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    res.render('maintenancerequest', { title: 'Property Pro' , data: data});
  });
});

router.get('/rentpayments', function(req, res, next) {
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    res.render('rentpayments', { title: 'Property Pro' , data: data});
  });
});

router.get('/propertyowned', function(req, res, next) {
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    res.render('propertyowned', { title: 'Property Pro' , data: data});
  });
});

router.get('/property1', function(req, res, next) {
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    res.render('property1', { title: 'Property Pro' , data: data});
  });
});

router.get('/property2', function(req, res, next) {
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    res.render('property2', { title: 'Property Pro' , data: data});
  });
});

router.get('/property3', function(req, res, next) {
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    res.render('property3', { title: 'Property Pro' , data: data});
  });
});

router.get('/property4', function(req, res, next) {
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    res.render('property4', { title: 'Property Pro' , data: data});
  });
});

router.get('/reports', function(req, res, next) {
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    res.render('reports', { title: 'Property Pro' , data: data});
  });
});

module.exports = router;
