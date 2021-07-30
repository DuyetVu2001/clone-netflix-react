import { ArrowBackOutlined } from '@material-ui/icons';
import './Watch.scss';

const Watch = () => {
	return (
		<div className="watch">
			<div className="watch__back-btn">
				<ArrowBackOutlined className="icon"/>
				<p>Home</p>
			</div>
			<video
				autoPlay
				progress
				controls
				src="https://player.vimeo.com/external/468454040.sd.mp4?s=c1aea845bb155ae2844b140d0b2d4f9593f56e1f&profile_id=139&oauth2_token_id=57447761"
			/>
		</div>
	);
};

export default Watch;
