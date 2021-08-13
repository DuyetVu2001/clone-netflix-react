import { useContext } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import './App.scss';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import { AuthContext } from './context/authContext/AuthContext';
import Home from './pages/Home';
import List from './pages/List';
import ListList from './pages/ListList';
import Login from './pages/Login';
import Movie from './pages/Movie';
import MovieList from './pages/MovieList';
import NewList from './pages/NewList';
import NewMovie from './pages/NewMovie';

function App() {
	const { user } = useContext(AuthContext);

	return (
		<Router>
			<Switch>
				<div className="app">
					<Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

					{user && (
						<>
							<TopBar />

							<div className="app__container">
								{/* Left side bar */}
								<div className="app__side-bar">
									<SideBar />
								</div>

								{/* Pages */}
								<div className="app__pages">
									<Route path="/new-list">
										<NewList />
									</Route>
									<Route path="/list/:id">
										<List />
									</Route>
									<Route path="/lists">
										<ListList />
									</Route>

									<Route path="/new-movie">
										<NewMovie />
									</Route>
									<Route path="/movie/:id">
										<Movie />
									</Route>
									<Route path="/movies">
										<MovieList />
									</Route>

									<Route exact path="/">
										<Home />
									</Route>
								</div>
							</div>
						</>
					)}
				</div>
			</Switch>
		</Router>
	);
}

export default App;
