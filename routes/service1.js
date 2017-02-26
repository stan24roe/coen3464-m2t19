var express = require('express');
var router = express.Router();

/* GET package1 page. */
router.get('/', function(req, res, next) {
  res.render('service1');
});

module.exports = router;