import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './Featured.scss';

const Featured = ({ type }) => {
	return (
		<div className="featured">
			{/* Poster */}
			<img
				src="https://cdn.dribbble.com/users/735631/screenshots/9074150/media/5833aa388588c6cc417d8733b859ee90.png"
				alt=""
			/>

			{/* Category */}
			{type && (
				<div className="featured__category">
					<span>{type === 'movies' ? 'Movies' : 'Series'}</span>
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
				<img
					src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
					alt=""
				/>
				<span className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
					adipisci repellendus eum quasi illo, velit numquam, maxime tempora
					sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
					temporibus eum earum?
				</span>

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
