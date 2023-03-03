const router = require('express').Router();
const UserController = require('../controllers');

router.post('/users', UserController.post);
router.get('/users/:email', UserController.getTestEmail);


module.exports = router