var request = require('request');

var form = {
  cmd0: 'PutZone_OnOff/OFF',
  cmd1: 'aspMainZone_WebUpdateStatus/',
  ZoneName: 'ZONE2'
};
var onOff = 'OFF';
var url = 'http://192.168.1.248/MainZone/index.put.asp';
request.post({url: url, form: form}, function() {console.log('done');});

