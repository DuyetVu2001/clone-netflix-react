import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import './style.scss';

const TopBar = () => {
	return (
		<div className="top-bar">
			<div className="top-bar__wrapper">
				<div className="top-bar__left">
					<h1 className="logo">Admin</h1>
				</div>

				<div className="top-bar__right">
					<div className="top-bar__icon">
						<NotificationsNone className="icon" />
						<span>2</span>
					</div>
					<div className="top-bar__icon">
						<Language className="icon" />
						<span>2</span>
					</div>
					<div className="top-bar__icon">
						<Settings className="icon" />
					</div>
					<div className="top-bar__profile">
						<img
							src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
