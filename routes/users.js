var express = require('express');
const cors = require('./cors');
var router = express.Router();

/* GET users listing. */
router.get('/', cors.cors, function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
