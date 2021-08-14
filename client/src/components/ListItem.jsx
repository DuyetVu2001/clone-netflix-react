import { Link } from 'react-router-dom';
import {
	Add,
	PlayArrow,
	ThumbDownOutlined,
	ThumbUpAltOutlined,
} from '@material-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react'; /*  */
import { API_URL } from '../const';
import './ListItem.scss';

const ListItem = ({ item }) => {
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await axios.get(
					`${API_URL}/movies/find/610682bdc41ede8f7cbb7e59`,
					{
						headers: {
							token:
								'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDY1MTkyZWEzMGYyNWUzYzM4ZWY4MiIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2Mjc4MDU3MzB9.ImMPHCSVMmr4ggbR8vZXMlNm9IMNVay9DuKTXFEmlmM',
						},
					}
				);

				setMovie(res.data.movie);
			} catch (error) {
				console.error(error);
			}
		};

		getMovie();

		return () => {
			setMovie({});
		};
	}, [item]);

	const {
		thumbnail,
		title,
		trailer,
		release_year,
		age_limit,
		desc,
		genre,
		video,
	} = movie;

	return (
		<Link to={{ pathname: '/watch', video }}>
			<div className="list-item">
				<img src={thumbnail} alt={title} />

				<div className="list-item__popup">
					<video src={trailer} muted autoPlay={true} loop />

					<div className="item-info">
						<div className="icons">
							<PlayArrow className="icon" />
							<Add className="icon" />
							<ThumbUpAltOutlined className="icon" />
							<ThumbDownOutlined className="icon" />
						</div>
						<div className="item-info-top">
							<span>1 hour 14 mins</span>
							<span className="limit">{age_limit}</span>
							<span>{release_year}</span>
						</div>
						<div className="desc">{desc}</div>
						<div className="genre">{genre}</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ListItem;
