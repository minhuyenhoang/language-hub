const router = require('express').Router();
const controller = require('../controllers/Users');

// update user's info
router.put('/:id', controller.updateUserInfo);

// delete a user
router.delete('/:id', controller.deleteUser);

//get a user
router.get('/:id', controller.getUser);

// follow a user
router.put('/:id/follow', async (req, res) => {});

module.exports = router;
