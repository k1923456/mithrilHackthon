var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var rp = require('request-promise');
var spawn = require('child_process').spawn;

/* GET users listing. */
router.get('/', async function(req, res, next) {
    var key = '526082922bf3118c42267fb791e5e0a8c9cf81a181d6154bec357ded4d94bd0894c35d6afbd5c877340f747681ca86ab52d6f2106c1befe78a5508a752f548c0';
    var client_id = '236eabc363028c634a2ecd5cb6688494';
    var nonce = '123';
    var timestamp = Date.now();

  var options = {
    uri: " https://2019-hackathon.api.mithvault.io//oauth/user-info",
    method: "GET",
    timeout: 10000,
    qs: {
        client_id: client_id,
        nonce: nonce,
        timestamp: timestamp
    },
    headers: {
        'Authorization': getToken(),
        'X-Vault-Signature': getSig(client_id, nonce, timestamp)
    },
    json: true // Automatically parses the JSON string in the response
  };

  // var body = await rp(options);

  var body = {
    userName: "james",
    email: "sdf@sdadsf.com",
    walletAddress: "uzzzzbbbbccc88343eeeee",
    walletMoney: 123.234
  };
  res.send(body);
});

function getToken() {
  return "95e1bf8c938d9765b5c332e79a04217dd1cba6988c9269349ec143355dc78ce10ae21bbfe3223e7cf6f0bff483920628d9ad8e3e68a1c73508d0fc3c835081a8";
}

async function getSig(client_id, nonce, timestamp) {
  var cmd = spawn('python3.6', ['/home/santai/b.py', timestamp]);
  var sig = '';
  // await cmd.stdout.on('data', function(data) {
  //   sig = data;
  //   console.log('SIG = ', sig);
  //   return sig;
  // });

  return sig;
}

module.exports = router;
