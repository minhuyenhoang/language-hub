import mongoose from 'mongoose';
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

module.exports =
	mongoose.models.Reactions || mongoose.model('Reactions', Reaction);
