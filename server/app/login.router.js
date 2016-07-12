var router = require('express').Router();
var User = require('../api/users/user.model')

router.post('/', function (req, res, next) {
  User.findOne({
    where: req.body
  })
  .then(function (user) {
    if (!user) {
      res.sendStatus(401);
    } else {
      req.session.userId = user.id;
      res.send(user);
    }
  })
  .catch(next);
})

module.exports = router;