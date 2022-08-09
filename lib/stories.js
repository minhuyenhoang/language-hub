const Post = require('../models/Post');
const Reaction = require('../models/Reaction');
//import Post from '../models/Post';
//import Reaction from '../models/Reaction';

// create a story
async function createStory(req, res) {
	const newStory = new Post(req.body);
	try {
		const saved = await newStory.save();
		res.status(200).json(saved);
	} catch (err) {
		res.status(500).json(err);
	}
}

// delete a story
async function deleteStory(req, res) {
	try {
		const story = await Post.findById(req.params.id);
		if (story.userId === req.body.userId) {
			await story.deleteOne();
			res.status(200).json('the post has been deleted');
		} else {
			res.status(403).json('you can delete only your post');
		}
	} catch (err) {
		res.status(500).json(err);
	}
}

// get a story
async function getStory(id) {
	try {
		const story = await Post.findById(id);
		const reactions = await Reaction.find({ storyId: id });
		const data = {
			story: story,
			reactions: reactions,
		};
		return data;
	} catch (err) {
		return err;
	}
}

// get all stories
async function getAllStories() {
	try {
		//const stories = await Post.find({ isStory: true });
		const stories = await Post.find({});
		let data = [];
		const reactionList = await Reaction.find({});
		stories.forEach((story) => {
			var reactions = reactionList.filter((reaction) => {
				return reaction.storyId.toString() == story._id.toString();
			});
			data.push({
				story: story,
				reactions: reactions,
			});
		});
		return data;
	} catch (err) {
		return err;
	}
}

// get all stories of a user
async function getStoriesByUser(req, res) {
	try {
		const stories = await Post.find({
			username: req.params.username,
			isStory: true,
		});
		const data = [];
		const reactionList = await Reaction.find({});
		stories.forEach((story) => {
			var reactions = reactionList.filter((reaction) => {
				return reaction.storyId.toString() == story._id.toString();
			});
			data.push({
				story: story,
				reactions: reactions,
			});
		});
		res.status(200).json(data);
	} catch (err) {}
}

module.exports = {
	createStory: createStory,
	deleteStory: deleteStory,
	getStory: getStory,
	getAllStories: getAllStories,
	getStoriesByUser: getStoriesByUser,
};
