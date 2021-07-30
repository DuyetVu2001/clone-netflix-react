import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from '@material-ui/icons';
import { useRef } from 'react';
import './List.scss';
import ListItem from './ListItem';

const List = () => {
	let slideNumber = useRef(0);
	slideNumber = slideNumber.current;

	const listRef = useRef();

	const onClick = (place) => () => {
		let distance = listRef.current.getBoundingClientRect().x - 50;

		// Left icon click
		if (place === 'left' && slideNumber > 0) {
			slideNumber -= 1;
			listRef.current.style.transform = `translateX(${distance + 230}px)`;
		}

		// Right icon click
		if (place === 'right' && slideNumber < 3) {
			slideNumber += 1;
			listRef.current.style.transform = `translateX(${distance - 230}px)`;
		}
	};

	return (
		<div className="list">
			{/* Title */}
			<span className="list__title">Continue to watch</span>

			<div className="list__wrapper">
				{/* Arrow left */}
				<ArrowBackIosOutlined className="icon left" onClick={onClick('left')} />

				{/* List item */}
				<div className="container" ref={listRef}>
					<ListItem index="0" />
					<ListItem index="1" />
					<ListItem index="2" />
					<ListItem index="3" />
					<ListItem index="4" />
					<ListItem index="5" />
					<ListItem index="6" />
					<ListItem index="7" />
					<ListItem index="8" />
					<ListItem index="9" />
				</div>

				{/* Arrow right */}
				<ArrowForwardIosOutlined
					className="icon right"
					onClick={onClick('right')}
				/>
			</div>
		</div>
	);
};

export default List;
