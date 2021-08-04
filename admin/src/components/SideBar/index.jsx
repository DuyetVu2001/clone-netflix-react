import {
	AttachMoney,
	BarChart,
	ChatBubbleOutline,
	DynamicFeed,
	LineStyle,
	MailOutline,
	PermIdentity,
	Report,
	Storefront,
	Timeline,
	TrendingUp,
	WorkOutline,
} from '@material-ui/icons';
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
						<li
							className={
								activeId === 1 ? 'side-bar__item active' : 'side-bar__item'
							}
							onClick={() => onClick(1)}
						>
							<Timeline className="side-bar__icon" />
							Analytics
						</li>
						<li
							className={
								activeId === 2 ? 'side-bar__item active' : 'side-bar__item'
							}
							onClick={() => onClick(2)}
						>
							<TrendingUp className="side-bar__icon" />
							Sales
						</li>
					</ul>
				</div>

				<div className="side-bar__menu">
					<h3>Quick Menu</h3>
					<ul className="side-bar__list">
						<Link to="/users" className="link">
							<li
								className={
									activeId === 3 ? 'side-bar__item active' : 'side-bar__item'
								}
								onClick={() => onClick(3)}
							>
								<PermIdentity className="side-bar__icon" />
								Users
							</li>
						</Link>
						<li
							className={
								activeId === 4 ? 'side-bar__item active' : 'side-bar__item'
							}
							onClick={() => onClick(4)}
						>
							<Storefront className="side-bar__icon" />
							Products
						</li>
						<li
							className={
								activeId === 5 ? 'side-bar__item active' : 'side-bar__item'
							}
							onClick={() => onClick(5)}
						>
							<AttachMoney className="side-bar__icon" />
							Transactions
						</li>
						<li
							className={
								activeId === 6 ? 'side-bar__item active' : 'side-bar__item'
							}
							onClick={() => onClick(6)}
						>
							<BarChart className="side-bar__icon" />
							Reports
						</li>
					</ul>
				</div>

				<div className="side-bar__menu">
					<h3>Notifications</h3>
					<ul className="side-bar__list">
						<li
							className={
								activeId === 7 ? 'side-bar__item active' : 'side-bar__item'
							}
							onClick={() => onClick(7)}
						>
							<MailOutline className="side-bar__icon" />
							Mail
						</li>
						<li
							className={
								activeId === 8 ? 'side-bar__item active' : 'side-bar__item'
							}
							onClick={() => onClick(8)}
						>
							<DynamicFeed className="side-bar__icon" />
							Feedback
						</li>
						<li
							className={
								activeId === 9 ? 'side-bar__item active' : 'side-bar__item'
							}
							onClick={() => onClick(9)}
						>
							<ChatBubbleOutline className="side-bar__icon" />
							Messages
						</li>
					</ul>
				</div>

				<div className="side-bar__menu">
					<h3>Staff</h3>
					<ul className="side-bar__list">
						<li
							className={
								activeId === 10 ? 'side-bar__item active' : 'side-bar__item'
							}
							onClick={() => onClick(10)}
						>
							<WorkOutline className="side-bar__icon" />
							Manage
						</li>
						<li
							className={
								activeId === 11 ? 'side-bar__item active' : 'side-bar__item'
							}
							onClick={() => onClick(11)}
						>
							<Timeline className="side-bar__icon" />
							Analytics
						</li>
						<li
							className={
								activeId === 12 ? 'side-bar__item active' : 'side-bar__item'
							}
							onClick={() => onClick(12)}
						>
							<Report className="side-bar__icon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
