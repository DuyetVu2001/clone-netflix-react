import Featured from '../components/Featured';
import List from '../components/List';
import Navbar from '../components/Navbar';
import './Home.scss';

const Home = () => {
	return (
		<div className="home-page">
			<Navbar />
			<Featured type="movies" />
			<List />
			<List />
			<List />
		</div>
	);
};

export default Home;
