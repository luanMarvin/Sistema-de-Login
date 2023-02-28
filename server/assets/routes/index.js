const router = require('express').Router();
const UserController = require('../controllers');
const cors = require('cors')

router.post('/users', cors(), UserController.post)

module.exports = router