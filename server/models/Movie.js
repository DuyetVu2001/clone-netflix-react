const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		desc: { type: String },
		genre: { type: String },

		poster: { type: String },
		title_img: { type: String },

		thumbnail: { type: String },
		trailer: { type: String },
		video: { type: String },

		release_year: { type: String },
		age_limit: { type: Number },
		is_series: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.export = mongoose.model('Movie', MovieSchema);
