import { Visibility } from '@material-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../../const';
import './style.scss';

const WidgetSm = () => {
	const [newUsers, setNewUsers] = useState([]);

	useEffect(() => {
		const getNewUsers = async () => {
			try {
				const res = await axios.get(`${API_URL}/users/?new=true`, {
					headers: {
						token:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDY1MTkyZWEzMGYyNWUzYzM4ZWY4MiIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2Mjc4MDU3MzB9.ImMPHCSVMmr4ggbR8vZXMlNm9IMNVay9DuKTXFEmlmM',
					},
				});

				res.data.user.map((item) =>
					setNewUsers((state) => [
						...state,
						{ profile_picture: item.profile_picture, username: item.username },
					])
				);
			} catch (error) {
				console.error(error);
			}
		};

		getNewUsers();
	}, []);

	return (
		<div className="widget-sm">
			<h4>New join members</h4>

			<ul className="widget-sm__list">
				{newUsers.map((user, index) => (
					<li className="widget-sm__item" key={index}>
						<div className="widget-sm__avatar">
							<img
								src={
									user.profile_picture ||
									'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'
								}
								alt=""
							/>
						</div>

						<div className="widget-sm__info">
							<p>{user.username}</p>
						</div>

						<div className="widget-sm__btn">
							<Visibility className="icon" />
							Display
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default WidgetSm;
