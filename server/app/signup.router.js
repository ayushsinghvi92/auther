var router = require('express').Router();
var User = require('../api/users/user.model')

router.post('/', function (req, res, next) {
  User.create({
    email: req.body.email,
    password: req.body.password
  })
  .then(function (user) {
    req.session.userId = user.id;
    res.send(user);
  })
  .catch(next);
})


module.exports = router;