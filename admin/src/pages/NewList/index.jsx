import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createList } from '../../context/listContext/apiCall';
import { ListContext } from '../../context/listContext/ListContext';
import { getMovies } from '../../context/movieContext/apiCall';
import { MovieContext } from '../../context/movieContext/MovieContext';
import './style.scss';

const NewList = () => {
	const { dispatch } = useContext(ListContext);
	const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

	const [list, setList] = useState(null);

	const history = useHistory();

	useEffect(() => {
		getMovies(dispatchMovie);
	}, [dispatchMovie]);

	const handleOnChange = (e) => {
		setList((state) => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSelect = (e) => {
		let value = Array.from(e.target.selectedOptions, (option) => option.value);
		setList({ ...list, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createList(list, dispatch);
		history.push('/lists');
	};

	return (
		<div className="new-product">
			<h4>New User</h4>

			<form className="new-product__form">
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
					<label>Genre</label>
					<input
						type="text"
						placeholder="genre"
						name="genre"
						onChange={handleOnChange}
					/>
				</div>

				<div className="new-product__item">
					<label>Type</label>
					<input
						type="text"
						placeholder="type"
						name="type"
						onChange={handleOnChange}
					/>
				</div>

				<div className="new-product__item">
					<label>Content</label>
					<select
						multiple
						name="content"
						onChange={handleSelect}
						style={{ height: '280px' }}
					>
						{movies.map((movie) => (
							<option key={movie._id} value={movie._id}>
								{movie.title}
							</option>
						))}
					</select>
				</div>

				<button className="new-product__create-btn" onClick={handleSubmit}>
					Create
				</button>
			</form>
		</div>
	);
};

export default NewList;
