var express = require('express');
var router = express.Router();

/* GET package2 page. */
router.get('/', function(req, res, next) {
  res.render('service3');
});

module.exports = router;