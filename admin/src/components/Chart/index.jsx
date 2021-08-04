import './style.scss';
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	YAxis,
} from 'recharts';

const Chart = ({ title, data, dataKey, grid }) => {
	return (
		<div className="chart">
			<h3>{title}</h3>

			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data} margin={{ right: 32 }}>
					{grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
					<XAxis
						dataKey="name"
						stroke="#5550bd"
						fontSize={16}
						fontWeight={600}
					/>
					<YAxis padding={{ top: 16 }} />
					<Tooltip className="tool" wrapperStyle={{ fontSize: '1.6rem' }} />
					<Line
						type="monotone"
						dataKey={dataKey}
						stroke="#5550bd"
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
