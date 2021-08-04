import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import Chart from '../../components/Chart';
import Featured from '../../components/Feartured';
import WidgetLg from '../../components/WidgetLg';
import WidgetSm from '../../components/WidgetSm';
import { API_URL } from '../../const';
import './style.scss';

const Home = () => {
	const [userStats, setUserStats] = useState([]);
	const MONTHS = useMemo(
		() => [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Agu',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		[]
	);

	useEffect(() => {
		const getUserStats = async () => {
			try {
				const res = await axios.get(`${API_URL}/users/stats`, {
					headers: {
						token:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDY1MTkyZWEzMGYyNWUzYzM4ZWY4MiIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2Mjc4MDU3MzB9.ImMPHCSVMmr4ggbR8vZXMlNm9IMNVay9DuKTXFEmlmM',
					},
				});

				const statsList = res.data.sort(function (a, b) {
					return a._id - b._id;
				});

				statsList.map((item) =>
					setUserStats((state) => [
						...state,
						{ name: MONTHS[item._id - 1], 'New User': item.total },
					])
				);
			} catch (error) {
				console.error(error);
			}
		};

		getUserStats();
	}, [MONTHS]);

	return (
		<div className="home">
			<Featured />
			<Chart data={userStats} title="User Analytics" grid dataKey="New User" />

			<div className="home__widget">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
};

export default Home;
