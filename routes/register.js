var express = require('express');
var router = express.Router();
var url = require('url');


router.post('/email', function(req, res, next) {
  let redirectURLString = 'https://2019-hackathon.mithvault.io/#/oauth/authorize?';
  redirectURLString = redirectURLString.concat('client_id=236eabc363028c634a2ecd5cb6688494&state=BBB');
  // console.log(redirectURLString);
  res.redirect(redirectURLString);
});