const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 30,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 8,
		},
		profilePic: {
			type: String,
			default: '',
		},
		coverPic: {
			type: String,
			default: '',
		},
		followers: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Users',
			},
		],
		following: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Users',
			},
		],
		desc: {
			type: String,
			maxlength: 100,
		},
		city: String,
		from: String,
		saved: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Posts',
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Users', User);
