const express = require('express');
const router = express.Router();

//test
router.get('/', function(req, res, next) {
  res.send('test page');
});

module.exports = router;
