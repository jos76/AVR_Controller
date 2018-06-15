var express = require('express');
var request = require('request');
var router = express.Router();

/* zone_control */
router.post('/', function(req, res, next) {

  var data = req.body;
  var form = {
    cmd0: 'PutZone_OnOff/' + data.status,
    cmd1: 'aspMainZone_WebUpdateStatus/',
    ZoneName: data.zone
  };
  var url = 'http://192.168.1.248/MainZone/index.put.asp';
  res.sendStatus(200);
  request.post({url: url, form: form}, function() {console.log(data.zone + ' turned ' + data.status);});
  //res.sendStatus(200);
});

module.exports = router;
