'use strict';

var router = require('express').Router();

//why is the path always '/'?

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

module.exports = router;
