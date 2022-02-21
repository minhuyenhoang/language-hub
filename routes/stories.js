const router = require('express').Router();
const controller = require('../controllers/Stories');

// create a story
router.post('/', controller.createStory);

// delete a story
router.delete('/:id', controller.deleteStory);

// get a story
router.get('/:id', controller.getStory);

// get all stories
router.get('/', controller.getAllStories);

// get all stories from a user
router.get('/profile/:username', controller.getStoriesByUser);

module.exports = router;
