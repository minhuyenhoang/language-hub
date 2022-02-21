const router = require('express').Router();
const controller = require('../controllers/Comments');

// get all comments
router.get('/', controller.getComments);

// add a comment
router.post('/', controller.addComment);

module.exports = router;
