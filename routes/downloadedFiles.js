var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var fileList = {
    total: 2,
    fileList: [
    {
      "fileID": "sfsadfasdf",
      "fileType": "mp3",
      "fileName": "sdfojaosdf.mp3",
      "userName": "k1923456",
      "uploadDate": "20190402-192837",
      "rating": 3.7,
      "price": 281.123
       },
      {
      "fileID": "sfsadfasdf-2",
      "fileType": "mp3",
      "fileName": "sdfojaosdf.mp3",
      "userName": "k1923456",
      "uploadDate": "20190402-192837",
      "rating": 3.7,
      "price": 281.123
       },
  ]
};
  res.send(fileList);
});

module.exports = router;
