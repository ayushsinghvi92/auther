var router = require('express').Router();
var User = require('../api/users/user.model')

router.post('/', function (req, res, next) {
  req.body.session.destroy();
  res.redirect('/');
})

module.exports = router;