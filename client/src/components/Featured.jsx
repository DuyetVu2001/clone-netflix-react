import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Featured.scss';
import { API_URL } from '../const';

const Featured = ({ type }) => {
	const [content, setContent] = useState({});

	useEffect(() => {
		const getRandomContent = async () => {
			try {
				const res = await axios.get(`${API_URL}/movies/random/?type=${type}`, {
					headers: {
						token:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDY1MTkyZWEzMGYyNWUzYzM4ZWY4MiIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2Mjc4MDU3MzB9.ImMPHCSVMmr4ggbR8vZXMlNm9IMNVay9DuKTXFEmlmM',
					},
				});

				setContent(res.data.movie[0]);
			} catch (error) {
				console.error(error);
			}
		};

		getRandomContent();
	}, [type]);

	const { poster, title_img, desc } = content;

	return (
		<div className="featured">
			{/* Poster */}
			<img src={poster} alt="" />

			{/* Category */}
			{type && (
				<div className="featured__category">
					<span>{type === 'movie' ? 'Movies' : 'Series'}</span>
					<select name="genre" id="genre">
						<option>Genre</option>
						<option value="adventure">Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
						<option value="fantasy">Fantasy</option>
						<option value="historical">Historical</option>
						<option value="horror">Horror</option>
						<option value="romance">Romance</option>
						<option value="sci-fi">Sci-fi</option>
						<option value="thriller">Thriller</option>
						<option value="western">Western</option>
						<option value="animation">Animation</option>
						<option value="drama">Drama</option>
						<option value="documentary">Documentary</option>
					</select>
				</div>
			)}

			{/* Content */}
			<div className="featured__info">
				<img src={title_img} alt="" />
				<span className="desc">{desc}</span>

				{/* Buttons */}
				<div className="buttons">
					<button className="play">
						<PlayArrow className="icon" />
						<span>Play</span>
					</button>
					<button className="more">
						<InfoOutlined className="icon" />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
