const Movie = require('../models/Movie');

//@ get --> /api/movies/ --> get all movie --> private - admin
exports.getAllMovie = async (req, res) => {
	if (req.user.is_admin) {
		try {
			const movies = await Movie.find();
			res.status(200).json({ success: true, movies: movies.reverse() });
		} catch (err) {
			res.status(500).json({ success: false, error });
		}
	} else {
		res.status(403).json({
			success: false,
			message: 'You are not allowed!',
		});
	}
};

//@ get --> /api/movies/find/:id --> get single movie --> private
exports.getMovie = async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);

		res.status(200).json({ success: true, movie });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

//@ get --> /api/movies/random --> get random movie --> private
exports.getRandomMovie = async (req, res) => {
	const type = req.query.type;
	let movie;
	try {
		type === 'series'
			? (movie = await Movie.aggregate([
					{ $match: { is_series: true } },
					{ $sample: { size: 1 } },
			  ]))
			: (movie = await Movie.aggregate([
					{ $match: { is_series: false } },
					{ $sample: { size: 1 } },
			  ]));

		res.status(200).json({ success: true, movie });
	} catch (err) {
		res.status(500).json({ success: false, error });
	}
};

//@ post --> /api/movies/ --> create movie -->  admin
exports.createMovie = async (req, res) => {
	if (req.user.is_admin) {
		const newMovie = new Movie(req.body);

		try {
			const saveMovie = await newMovie.save();

			res.status(201).json({ success: true, movie: saveMovie });
		} catch (error) {
			res.status(500).json({ success: false, error });
		}
	} else {
		res.status(403).json({
			success: false,
			message: 'You are not allowed!',
		});
	}
};

//@ put --> /api/movies/:id --> update movie -->  admin
exports.updateMovie = async (req, res) => {
	if (req.user.is_admin) {
		try {
			const updatedMovie = await Movie.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);

			res.status(200).json({ success: true, movie: updatedMovie });
		} catch (error) {
			res.status(500).json({ success: false, error });
		}
	} else {
		res.status(403).json({
			success: false,
			message: 'You are not allowed!',
		});
	}
};

//@ delete --> /api/movies/:id --> delete movie -->  admin
exports.deleteMovie = async (req, res) => {
	if (req.user.is_admin) {
		try {
			await Movie.findByIdAndDelete(req.params.id);

			res.status(200).json({
				success: true,
				message: 'The movie has been deleted...',
			});
		} catch (error) {
			res.status(500).json({ success: false, error });
		}
	} else {
		res.status(403).json({
			success: false,
			message: 'You are not allowed!',
		});
	}
};
