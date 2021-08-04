import { Visibility } from '@material-ui/icons';
import './style.scss';

const WidgetSm = () => {
	return (
		<div className="widget-sm">
			<h4>New join members</h4>

			<ul className="widget-sm__list">
				<li className="widget-sm__item">
					<div className="widget-sm__avatar">
						<img
							src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
							alt=""
						/>
					</div>

					<div className="widget-sm__info">
						<p>Hieu Zing Mp3</p>
						<p>Developer</p>
					</div>

					<div className="widget-sm__btn">
						<Visibility className="icon" />
						Display
					</div>
				</li>

				<li className="widget-sm__item">
					<div className="widget-sm__avatar">
						<img
							src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
							alt=""
						/>
					</div>

					<div className="widget-sm__info">
						<p>Dev Hien Ban</p>
						<p>Developer</p>
					</div>

					<div className="widget-sm__btn">
						<Visibility className="icon" />
						Display
					</div>
				</li>

				<li className="widget-sm__item">
					<div className="widget-sm__avatar">
						<img
							src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
							alt=""
						/>
					</div>

					<div className="widget-sm__info">
						<p>Viet Hoang Ngo</p>
						<p>Developer</p>
					</div>

					<div className="widget-sm__btn">
						<Visibility className="icon" />
						Display
					</div>
				</li>
			</ul>
		</div>
	);
};

export default WidgetSm;
