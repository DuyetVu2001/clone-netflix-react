const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },

		profile_picture: { type: String, default: '' },
		is_admin: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.export = mongoose.model('User', UserSchema);
