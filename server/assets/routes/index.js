const router = require('express').Router();
const UserController = require('../controllers');

router.post('/users', UserController.post);
router.get('/users/:email', UserController.getTestEmail);

//Errors
router.get('*', function(req, res){
    res.status(404).render(path.join(__dirname + '/page-not-found.html'));
  });

module.exports = router