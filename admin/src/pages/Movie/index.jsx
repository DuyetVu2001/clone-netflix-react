import { Publish } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
// import { useContext } from 'react';
// import { updateMovie } from '../../context/movieContext/apiCall';
// import { MovieContext } from '../../context/movieContext/MovieContext';
import './style.scss';

const Movie = () => {
	// const { dispatch } = useContext(MovieContext);

	const { thumbnail, title, _id, age_limit, release_year, genre } =
		useLocation().movie;

	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	updateMovie(movie, dispatch);
	// };

	return (
		<div className="product">
			<div className="product__header">
				<h4>Movie</h4>
				<Link to="/new-movie">
					<button>Create</button>
				</Link>
			</div>

			<div className="product__info">
				<div className="product__detail">
					<div className="product__detail-top">
						<img src={thumbnail} alt={title} />
						<span>{title}</span>
					</div>

					<div className="product__detail-bottom">
						<div className="product__detail-item">
							<span className="key">id:</span>
							<span className="value">{_id}</span>
						</div>

						<div className="product__detail-item">
							<span className="key">genre:</span>
							<span className="value">{genre}</span>
						</div>

						<div className="product__detail-item">
							<span className="key">year:</span>
							<span className="value">{release_year}</span>
						</div>

						<div className="product__detail-item">
							<span className="key">limit:</span>
							<span className="value">{age_limit}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="product__update">
				<form className="product__update-form">
					<div className="product__form-left">
						<label>Movie title</label>
						<input type="text" placeholder={title} name="title" />

						<label>Year</label>
						<input type="text" placeholder={release_year} name="year" />

						<label>Genre</label>
						<input type="text" placeholder={genre} name="genre" />

						<label>Limit</label>
						<input type="text" placeholder={age_limit} name="age_limit" />

						<label>Trailer</label>
						<input type="file" name="trailer" />

						<label>Video</label>
						<input type="file" name="video" />
					</div>
					<div className="product__form-right">
						<div className="upload">
							<img src={thumbnail} alt={title} />
							<label htmlFor="file">
								<Publish className="icon" />
							</label>
							<input
								type="file"
								id="file"
								style={{ display: 'none' }}
								name="thumbnail"
							/>
						</div>
						<button
							className="product__update-btn"
							// onClick={handleSubmit}
						>
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Movie;
