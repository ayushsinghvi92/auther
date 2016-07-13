var router = require('express').Router();
var User = require('../api/users/user.model')

router.post('/', function (req, res, next) {
  req.session.destroy();
  res.sendStatus(200)
})

module.exports = router;
