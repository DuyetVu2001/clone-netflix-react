import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './style.scss';

const Featured = () => {
	return (
		<div className="featured">
			<div className="featured__item">
				<h4 className="featured__title">Revalue</h4>
				<div className="featured__info">
					<p>
						$1,201
						<span>
							-3.2 <ArrowDownward className="icon" />
						</span>
					</p>
				</div>
				<p className="featured__sub-title">Compared to last month</p>
			</div>
			<div className="featured__item">
				<h4 className="featured__title">Sales</h4>
				<div className="featured__info">
					<p>
						$2,404
						<span>
							-2.2 <ArrowDownward className="icon" />
						</span>
					</p>
				</div>
				<p className="featured__sub-title">Compared to last month</p>
			</div>
			<div className="featured__item">
				<h4 className="featured__title">Cost</h4>
				<div className="featured__info">
					<p>
						$502
						<span>
							+10.2 <ArrowUpward className="icon up" />
						</span>
					</p>
				</div>
				<p className="featured__sub-title">Compared to last month</p>
			</div>
		</div>
	);
};

export default Featured;
