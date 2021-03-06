const List = require('../models/List');

//@ get --> /api/lists/ -->  get random 10 lists --> private
exports.getLists = async (req, res) => {
	const typeQuery = req.query.type;
	const genreQuery = req.query.genre;
	let lists = [];

	try {
		if (typeQuery) {
			if (genreQuery) {
				lists = await List.aggregate([
					{ $sample: { size: 10 } },
					{ $match: { type: typeQuery, genre: genreQuery } },
				]);
			} else {
				lists = await List.aggregate([
					{ $sample: { size: 10 } },
					{ $match: { type: typeQuery } },
				]);
			}
		} else {
			lists = await List.aggregate([{ $sample: { size: 10 } }]);
		}

		res.status(200).json({ success: true, lists });
	} catch (err) {
		res.status(500).json({ success: false, error });
	}
};

//@ post --> /api/lists/ --> create list --> admin
exports.createList = async (req, res) => {
	if (req.user.is_admin) {
		const newList = new List(req.body);

		try {
			const saveList = await newList.save();

			res.status(201).json({ success: true, list: saveList });
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

//@ delete --> /api/lists/:id --> delete list --> admin
exports.deleteList = async (req, res) => {
	if (req.user.is_admin) {
		try {
			await List.findByIdAndDelete(req.params.id);

			res.status(200).json({
				success: true,
				message: 'The list has been deleted...',
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
