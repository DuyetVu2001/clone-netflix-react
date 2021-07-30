import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import './Navbar.scss';

function Navbar() {
	const [isScrolled, setScrolled] = useState(false);

	window.addEventListener('scroll', () => {
		const yAxis = window.pageYOffset;

		setScrolled(yAxis >= 32 ? true : false);
		return () => (window.onscroll = null);
	});

	return (
		<nav className={isScrolled ? 'navbar navbar--scrolled' : 'navbar'}>
			<div className="navbar__container">
				{/* Left side navbar */}
				<div className="left">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
						alt="Netflix logo"
					/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>

				{/* Right side navbar */}
				<div className="right">
					<Search className="icon" />
					<span>KID</span>
					<Notifications className="icon" />
					<img
						src="https://cdn.dribbble.com/users/735631/screenshots/9074150/media/5833aa388588c6cc417d8733b859ee90.png"
						alt="profile"
					/>

					{/* Drop menu */}
					<div className="profile">
						<ArrowDropDown className="icon" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
