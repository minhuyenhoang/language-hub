import mongoose from 'mongoose';
const { Schema } = mongoose;

const Post = new mongoose.Schema(
	{
		username: String,
		commentCount: {
			type: Number,
			default: 0,
		},
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'users',
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		img: {
			type: String,
		},
		tag: [String],
		isStory: Boolean,
		isRec: Boolean,
	},
	{ timestamps: true }
);

module.exports = mongoose.models.Posts || mongoose.model('Posts', Post);
