import { LineStyle, PlayCircleOutline } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const SideBar = () => {
	const [activeId, setActiveId] = useState(0);

	const onClick = (id) => {
		setActiveId(id);
	};

	return (
		<div className="side-bar">
			<div className="side-bar__wrapper">
				<div className="side-bar__menu">
					<h3>Dashboard</h3>
					<ul className="side-bar__list">
						<Link to="/" className="link">
							<li
								className={
									activeId === 0 ? 'side-bar__item active' : 'side-bar__item'
								}
								onClick={() => onClick(0)}
							>
								<LineStyle className="side-bar__icon" />
								Home
							</li>
						</Link>

						<Link to="/movies" className="link">
							<li
								className={
									activeId === 1 ? 'side-bar__item active' : 'side-bar__item'
								}
								onClick={() => onClick(1)}
							>
								<PlayCircleOutline className="side-bar__icon" />
								Movies
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
