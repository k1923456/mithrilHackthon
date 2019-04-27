var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  fs.writeFileSync('./grantCodes/'.concat(req.query.grant_code), req.query.grant_code);
  res.send({user_id: "95e1bf8c938d9765b5c332e79a04217dd1cba6988c9269349ec143355dc78ce10ae21bbfe3223e7cf6f0bff483920628d9ad8e3e68a1c73508d0fc3c835081a8", error: 0});
});

module.exports = router;
