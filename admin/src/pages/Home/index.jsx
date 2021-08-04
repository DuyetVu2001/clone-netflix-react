import Chart from '../../components/Chart';
import Featured from '../../components/Feartured';
import WidgetLg from '../../components/WidgetLg';
import WidgetSm from '../../components/WidgetSm';
import { userData } from '../../dummyData';
import './style.scss';

const Home = () => {
	return (
		<div className="home">
			<Featured />
			<Chart
				data={userData}
				title="User Analytics"
				grid
				dataKey="Active User"
			/>

			<div className="home__widget">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
};

export default Home;
