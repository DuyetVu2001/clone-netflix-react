import {
	Add,
	PlayArrow,
	ThumbDownOutlined,
	ThumbUpAltOutlined,
} from '@material-ui/icons';
import './ListItem.scss';

const ListItem = () => {
	const trailer =
		'https://player.vimeo.com/external/468454040.sd.mp4?s=c1aea845bb155ae2844b140d0b2d4f9593f56e1f&profile_id=139&oauth2_token_id=57447761';
	return (
		<div className="list-item">
			<img
				src="https://cdn.dribbble.com/users/735631/screenshots/9074150/media/5833aa388588c6cc417d8733b859ee90.png"
				alt="trailer"
			/>

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
						<span className="limit">+16</span>
						<span>1999</span>
					</div>
					<div className="desc">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Praesentium hic rem eveniet error possimus, neque ex doloribus.
					</div>
					<div className="genre">Action</div>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
