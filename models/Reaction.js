const mongoose = require('mongoose');
const { Schema } = mongoose;

const Reaction = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'Users',
	},
	storyId: {
		type: Schema.Types.ObjectId,
		ref: 'Posts',
	},
	reaction: {
		type: String,
		enum: ['👍', '😍', '🙌', '🤩', '👏', '❤️', '🤣', '🔥', '😆', '💪', '🎉'],
	},
});

module.exports = mongoose.model('Reactions', Reaction);
