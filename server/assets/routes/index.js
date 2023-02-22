const router = require('express').Router();
const UserController = require('../controllers');

router.post('/users', UserController.post)

module.exports = router