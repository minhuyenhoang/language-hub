const Comment = require('../models/Comment');
const Post = require('../models/Post');

async function addComment(req, res) {
	try {
		let data = {
			userId: req.body.userId,
			storyId: req.body.storyId,
			username: req.body.username,
			text: req.body.text,
		};

		if (req.body.parentId) {
			data.parentId = req.body.parentId;
		}

		if (req.body.depth) {
			data.depth = req.body.depth;
		}

		const comment = new Comment(data);
		const saved = await comment.save();
		await Post.updateOne(
			{ postId: req.body.postId },
			{ $inc: { commentCount: 1 } }
		);
		res.status(200).json(saved);
	} catch (err) {
		res.status(500).json(err);
	}
}

async function getComments(req, res) {
	try {
		const comments = await Comment.find({ postId: req.body.id })
			.sort({ createdAt: 1 })
			.lean();
		let threads = {},
			comment;
		for (let i = 0; i < comments.length; i++) {
			comment = comments[i];
			let parentId = comment.parentId;
			comment.children = {};
			if (!parentId) {
				threads[comment._id] = comment;
				continue;
			}
			createThread(comment, threads);
		}
		res.status(200).json({
			count: comments.length,
			comments: threads,
		});
	} catch (err) {
		res.status(500).json(err);
	}
}

function createThread(comment, threads) {
	for (var thread in threads) {
		value = threads[thread];

		if (thread.toString() === comment.parentId.toString()) {
			value.children[comment._id] = comment;
			return;
		}

		if (value.children) {
			createThread(comment, value.children);
		}
	}
}

module.exports = {
	addComment: addComment,
	getComments: getComments,
};
