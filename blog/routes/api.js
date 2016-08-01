var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/get', function(req, res, next) {
  res.send({status: 'success'});
});

module.exports = router;
