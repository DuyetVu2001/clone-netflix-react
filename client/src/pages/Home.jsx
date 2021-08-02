import axios from 'axios';
import { useEffect, useState } from 'react';
import Featured from '../components/Featured';
import List from '../components/List';
import Navbar from '../components/Navbar';
import { API_URL } from '../const';
import './Home.scss';

const Home = ({ type }) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);

	useEffect(() => {
		const getRandomLists = async () => {
			try {
				const res = await axios.get(
					`${API_URL}/lists/${type ? '?type=' + type : ''}${
						genre ? '&genre=' + genre : ''
					}`,
					{
						headers: {
							token:
								'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDY1MTkyZWEzMGYyNWUzYzM4ZWY4MiIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2Mjc4MDU3MzB9.ImMPHCSVMmr4ggbR8vZXMlNm9IMNVay9DuKTXFEmlmM',
						},
					}
				);
	
				setLists(res.data.list);
			} catch (error) {
				console.error(error)
			}
		};

		getRandomLists();
	}, [genre, type]);

	return (
		<div className="home-page">
			<Navbar />
			<Featured type={type} />

			{lists.map((list, index) => (
				<List key={index} list={list} />
			))}
		</div>
	);
};

export default Home;
