var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var fileList = {
    "sfsadfasdf": {
        description: "asidjflasdfjsdaf",
        onlineUsers: 100,
        fileSize: 127637478383
    },
    "sfsadfasdf-2": {
      description: "HAHAHA",
      onlineUsers: 21,
      fileSize: 333433
    }
  };
  res.send(fileList[req.body.fileID]);
});

module.exports = router;
