const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');

// routes
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const storiesRoutes = require('./routes/stories');
const reactionsRoutes = require('./routes/reactions');
const commentsRoutes = require('./routes/comments');

dotenv.config();

mongoose.connect(
	process.env.MONGO_URL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('Connected to MongoDB');
	}
);

// middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/stories', storiesRoutes);
app.use('/api/reactions', reactionsRoutes);
app.use('/api/comments', commentsRoutes);

app.listen(4000, () => {
	console.log('Server is up and running!');
});
