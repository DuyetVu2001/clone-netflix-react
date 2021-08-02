const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const route = require('./routes');

dotenv.config();

const app = express();
const port = 8800;

// Middleware
app.use(express.json());
app.use(cors());
route(app);

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log('Connect to MongoDB successfully!');
	})
	.catch((error) => {
		console.log('MongoDB errors: ', error);
	});

app.listen(port, () => {
	console.log('Server is running on port: ', port);
});
