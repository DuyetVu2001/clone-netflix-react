const CryptoJS = require('crypto-js');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const { SECRET_KEY } = process.env;

// @ get --> /api/users/?new=true --> get new users --> admin
exports.getAllUser = async (req, res) => {
	if (req.user.is_admin) {
		try {
			const user = req.query.new
				? await User.find().sort({ _id: -1 }).limit(5)
				: await User.find();

			if (!user) {
				return res.json({
					success: false,
					message: 'Nothing here!',
				});
			}

			res.status(200).json({ success: true, user });
		} catch (error) {
			res.status(500).json({ success: false, error });
		}
	} else {
		res.status(403).json({
			success: false,
			message: 'You are not allowed to see all users!',
		});
	}
};

// @ get --> /api/users/find/:id  --> get user --> public
exports.getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);

		res.status(200).json({ success: true, user });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ get --> /api/users/stats  --> get user stats --> admin
exports.getUserStats = async (req, res) => {
	try {
		const userStats = await User.aggregate([
			{
				$project: {
					month: { $month: '$createdAt' },
				},
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: 1 },
				},
			},
		]);
		res.status(200).json({ success: true, user: userStats });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ put --> /api/users/:id --> update user --> private
exports.updateUser = async (req, res) => {
	if (req.user.id === req.params.id || req.user.is_admin) {
		if (req.body.password) {
			req.body.password = CryptoJS.AES.encrypt(
				req.body.password,
				SECRET_KEY
			).toString();
		}

		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{ $set: req.body },
				{ new: true }
			);

			res.status(200).json({ success: true, user: updatedUser });
		} catch (error) {
			res.status(500).json({ success: false, error });
		}
	} else {
		res.status(403).json({
			success: false,
			message: 'You can update only your account!',
		});
	}
};

// @ delete --> /api/users/:id --> delete user --> public
exports.deleteUser = async (req, res) => {
	if (req.user.id === req.params.id || req.user.is_admin) {
		try {
			const user = await User.findByIdAndDelete(req.params.id);
			if (!user) {
				return res.json({
					success: false,
					message: 'User does not exists!',
				});
			}

			res.status(200).json({
				success: true,
				message: 'User has been deleted!',
			});
		} catch (error) {
			res.status(500).json({ success: false, error });
		}
	} else {
		res.status(403).json({
			success: false,
			message: 'You can delete only your account!',
		});
	}
};
