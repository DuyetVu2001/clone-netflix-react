import { useContext, useState } from 'react';
import { createMovie } from '../../context/movieContext/apiCall';
import { MovieContext } from '../../context/movieContext/MovieContext';
import storage from '../../firebase';
import './style.scss';

const NewMovie = () => {
	const { dispatch } = useContext(MovieContext);

	const [movie, setMovie] = useState(null);
	const [poster, setPoster] = useState(null);
	const [imgTitle, setImgTitle] = useState(null);
	const [thumbnail, setThumbnail] = useState(null);
	const [trailer, setTrailer] = useState(null);
	const [video, setVideo] = useState(null);
	const [uploaded, setUploaded] = useState(0);

	const handleOnChange = (e) => {
		setMovie((state) => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	};

	const upload = (items) => {
		items.forEach((item) => {
			const fileName = new Date().getTime() + item.label + item.file.name;
			const uploadTask = storage.ref(`items/${fileName}`).put(item.file);

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done.');
				},
				(error) => {
					console.error(error);
				},
				() =>
					uploadTask.snapshot.ref.getDownloadURL().then((url) => {
						setMovie((state) => ({
							...state,
							[item.label]: url,
						}));

						setUploaded((state) => state + 1);
					})
			);
		});
	};

	const handleUpload = (e) => {
		e.preventDefault();
		upload([
			{ file: poster, label: 'poster' },
			{ file: imgTitle, label: 'title_img' },
			{ file: thumbnail, label: 'thumbnail' },
			{ file: trailer, label: 'trailer' },
			{ file: video, label: 'video' },
		]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(movie);

		createMovie(movie, dispatch);
	};

	return (
		<div className="new-product">
			<h4>New User</h4>

			<form className="new-product__form">
				<div className="new-product__item">
					<label>Poster</label>
					<input
						type="file"
						name="poster"
						onChange={(e) => setPoster(e.target.files[0])}
					/>
				</div>

				<div className="new-product__item">
					<label>Title image</label>
					<input
						type="file"
						name="title_image"
						onChange={(e) => setImgTitle(e.target.files[0])}
					/>
				</div>

				<div className="new-product__item">
					<label>Thumbnail image</label>
					<input
						type="file"
						name="thumbnail"
						onChange={(e) => setThumbnail(e.target.files[0])}
					/>
				</div>

				<div className="new-product__item">
					<label>Trailer</label>
					<input
						type="file"
						name="trailer"
						onChange={(e) => setTrailer(e.target.files[0])}
					/>
				</div>

				<div className="new-product__item">
					<label>Video</label>
					<input
						type="file"
						name="video"
						onChange={(e) => setVideo(e.target.files[0])}
					/>
				</div>

				<div className="new-product__item">
					<label>Title</label>
					<input
						type="text"
						placeholder="Title"
						name="title"
						onChange={handleOnChange}
					/>
				</div>

				<div className="new-product__item">
					<label>Description</label>
					<input
						type="text"
						placeholder="desc"
						name="desc"
						onChange={handleOnChange}
					/>
				</div>

				<div className="new-product__item">
					<label>Year</label>
					<input
						type="text"
						placeholder="year"
						name="year"
						onChange={handleOnChange}
					/>
				</div>

				<div className="new-product__item">
					<label>Genre</label>
					<input
						type="text"
						placeholder="genre"
						name="genre"
						onChange={handleOnChange}
					/>
				</div>

				<div className="new-product__item">
					<label>Duration</label>
					<input
						type="text"
						placeholder="duration"
						name="duration"
						onChange={handleOnChange}
					/>
				</div>

				<div className="new-product__item">
					<label>Limit</label>
					<input
						type="number"
						placeholder="limit"
						name="age_limit"
						onChange={handleOnChange}
					/>
				</div>

				<div className="new-product__item">
					<label>Is series?</label>
					<select
						className="new-product__select"
						name="is_series"
						id="is-series"
						onChange={handleOnChange}
					>
						<option value="no" selected>
							No
						</option>
						<option value="yes">Yes</option>
					</select>
				</div>

				{uploaded === 5 ? (
					<button className="new-product__create-btn" onClick={handleSubmit}>
						Create
					</button>
				) : (
					<button className="new-product__create-btn" onClick={handleUpload}>
						Upload
					</button>
				)}
			</form>
		</div>
	);
};

export default NewMovie;
