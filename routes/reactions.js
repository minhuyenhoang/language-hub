const router = require('express').Router();
const controller = require('../controllers/Reactions');

// add or remove a reaction
router.put('/:storyId', controller.updateReaction);

module.exports = router;
