const router = require('express').Router();
const controller = require('../controllers/Users');

// sign up
router.post('/register', controller.signUp);

// login
router.post('/login', controller.login);

module.exports = router;
