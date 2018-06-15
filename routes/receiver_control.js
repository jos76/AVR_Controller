var express = require('express');
var request = require('request');
var x2j = require('xml2js');
var router = express.Router();

var baseUrl = 'http://192.168.1.248/';
var getUrl = baseUrl + 'goform/formMainZone_MainZoneXml.xml';
var postUrl = baseUrl + 'MainZone/index.put.asp';

/* receiver_control/post */
router.post('/post', function(req, res, next) {
  var form = req.body;
  res.sendStatus(200); // send status before receiver request b/c receiver request takes a second or two
  request.post({url: postUrl, form: form}, function() {console.log('Sent Receiver: ' + JSON.stringify(form));});
});

/* receiver_control/get */
router.get('/get', function(req, res, next) {

  var zone = req.query.zone;
  var url;
  if (zone) {
    url = getUrl + '?_=&ZoneName=' + zone;
  } else {
    url = getUrl;
  }
  request.get(url, function(err, res2, body) {
    x2j.parseString(body, function(err2, result) {
      res.send(result);
    });
  });
});

module.exports = router;
