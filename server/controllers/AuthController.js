const CryptoJS = require('crypto-js');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const { SECRET_KEY } = process.env;

// @ post --> /api/auth/register --> register --> public
exports.register = async (req, res) => {
	const userData = req.body;
	const { username, email, password } = userData;

	try {
		// Check user is existing ?
		const user = await User.findOne({ $or: [{ email }, { username }] });
		if (user) {
			return res.status(401).json({
				success: false,
				message: 'User already exists!',
			});
		}

		// Create model
		const newUser = new User({
			username,
			email,
			password: CryptoJS.AES.encrypt(password, SECRET_KEY).toString(),
		});

		// Save data and send response
		await newUser.save();

		res.status(201).json({
			success: true,
			user: newUser,
		});
	} catch (error) {
		res.status(500).json({ success: false });
	}
};

// @ post --> /api/auth/login --> log in --> private
exports.login = async (req, res) => {
	const userData = req.body;
	const { email, password } = userData;

	try {
		// Check user is existing and verify password
		const user = await User.findOne({ email });

		// Decrypt password
		const bytes = CryptoJS.AES.decrypt(user.password, SECRET_KEY);
		const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

		if (!user || password !== originalPassword) {
			return res.status(401).json({
				success: false,
				message: 'Incorrect username or password!',
			});
		}

		// Token
		const accessToken = jwt.sign(
			{
				id: user._id,
				is_admin: user.is_admin,
			},
			SECRET_KEY
		);

		res.status(201).json({
			success: true,
			user,
			accessToken,
		});
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};
