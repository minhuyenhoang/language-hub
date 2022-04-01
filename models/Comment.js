const mongoose = require('mongoose');
const { Schema } = mongoose;

const Comment = mongoose.Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'Users',
		},
		postId: {
			type: Schema.Types.ObjectId,
			ref: 'Posts',
		},
		parentId: {
			type: Schema.Types.ObjectId,
			ref: 'Comments',
		},
		username: String,
		depth: Number,
		text: {
			type: String,
			required: true,
		},
		kudo: Number,
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Comments', Comment);
