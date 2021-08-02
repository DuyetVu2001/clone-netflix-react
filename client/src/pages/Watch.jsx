import { ArrowBackOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import './Watch.scss';

const Watch = () => {
	const { video } = useLocation();

	return (
		<div className="watch">
			<Link to="/">
				<div className="watch__back-btn">
					<ArrowBackOutlined className="icon" />
					<p>Home</p>
				</div>
			</Link>
			<video autoPlay progress controls src={video} />
		</div>
	);
};

export default Watch;
