const router = require('express').Router();
const UserController = require('../controllers/register');
const Login = require('../controllers/login')

router.post('/users', UserController.post);
router.post('/login', Login.access);

router.get('/users/:email', UserController.getTestEmail);
router.get('/autenticated', Login.auth);

module.exports = router