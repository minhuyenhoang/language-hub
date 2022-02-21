const Reaction = require('../models/Reaction');

// add or remove reactions
async function updateReaction(req, res) {
	try {
		const reaction = await Reaction.findOne({
			userId: req.body.userId,
			storyId: req.params.storyId,
		}).where({ reactionType: req.body.reaction });
		const data = {
			userId: req.body.userId,
			storyId: req.params.storyId,
			reaction: req.body.reaction,
		};
		if (!reaction) {
			const newReaction = new Reaction(data);
			await newReaction.save();
			res.status(200).json('The post has been liked');
		} else {
			await reaction.deleteOne(data);
			res.status(200).json('The post has been disliked');
		}
	} catch (err) {
		res.status(500).json(err);
	}
}

module.exports = {
	updateReaction: updateReaction,
};
