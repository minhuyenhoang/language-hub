const User = require('../models/User');
const bcrypt = require('bcrypt');

// register a user
async function signUp(req, res) {
	try {
		// encrypt user's password
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);

		//create a new user
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPass,
		});

		// save the new user to the database
		const user = await newUser.save();

		// save successfully!
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
}

// login
async function login(req, res) {
	try {
		// find the user
		const user = await User.findOne({ username: req.body.username });

		// if not found
		!user && res.status(404).send('user not found!');

		// if password does not match
		const correctPass = await bcrypt.compare(req.body.password, user.password);
		!correctPass && res.status(400).send('incorrect password!');

		// save successfully!
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
}

// update user's info
async function updateUserInfo(req, res) {
	if (req.body.userId === req.params.id) {
		if (req.body.password) {
			try {
				// encrypt user's password
				const salt = await bcrypt.genSalt(10);
				req.body.password = await bcrypt.hash(req.body.password, salt);
			} catch (err) {
				return res.status(500).json(err);
			}

			try {
				const user = await User.findByIdAndUpdate(req.params.id, {
					password: req.body.password,
				});
				res.status(200).send('Password updated!');
			} catch (err) {}
		}
	}
}

// delete a user
async function deleteUser(req, res) {
	if (req.body.userId === req.params.id) {
		try {
			await User.findByIdAndDelete(req.params.id);
			res.status(200).send('Account has been deleted');
		} catch (err) {
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).send('You can delete only your account!');
	}
}

// get a user
async function getUser(req, res) {
	try {
		const user = await User.findById(req.params.id);
		const { password, updatedAt, ...other } = user._doc;
		res.status(200).json(other);
	} catch (err) {
		res.status(500).json(err);
	}
}

module.exports = {
	signUp: signUp,
	login: login,
	updateUserInfo: updateUserInfo,
	deleteUser: deleteUser,
	getUser: getUser,
};
