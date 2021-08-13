import { Link, useLocation } from 'react-router-dom';
import './style.scss';

const List = () => {
	const { title, _id, type, genre } = useLocation().list;

	return (
		<div className="list">
			<div className="list__header">
				<h4>List</h4>
				<Link to="/new-list">
					<button>Create</button>
				</Link>
			</div>

			<div className="list__info">
				<div className="list__detail">
					<div className="list__detail-top">
						<span>{title}</span>
					</div>

					<div className="list__detail-bottom">
						<div className="list__detail-item">
							<span className="key">id:</span>
							<span className="value">{_id}</span>
						</div>

						<div className="list__detail-item">
							<span className="key">genre:</span>
							<span className="value">{genre}</span>
						</div>

						<div className="list__detail-item">
							<span className="key">type:</span>
							<span className="value">{type}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="list__update">
				<form className="list__update-form">
					<div className="list__form-left">
						<label>List title</label>
						<input type="text" placeholder={title} name="title" />

						<label>List type</label>
						<input type="text" placeholder={type} name="type" />

						<label>List genre</label>
						<input type="text" placeholder={genre} name="genre" />
					</div>
					<div className="list__form-right">
						<button className="list__update-btn">Update</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default List;
