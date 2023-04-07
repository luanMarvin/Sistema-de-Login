const router = require('express').Router();
const UserController = require('../controllers/register');
const Login = require('../controllers/login')

//POST
router.post('/users', UserController.post);
router.post('/login', Login.access);

//GET
router.get('/users/:email', UserController.getTestEmail);
router.get('/autenticated', Login.auth);

module.exports = router