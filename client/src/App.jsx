import './App.scss';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Login from './pages/Login';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

function App() {
	const user = true;

	return (
		<div className="App">
			<Router>
				<Switch>
					{/* Home */}
					<Route exact path="/">
						{user ? <Home /> : <Redirect to="/login" />}
					</Route>

					{/* Login & Register */}
					<Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

					{/* Watch */}
					{user && (
						<Switch>
							<Route path="/movies">
								<Home type="movie" />
							</Route>
							<Route path="/series">
								<Home type="series" />
							</Route>
							<Route path="/watch" component={Watch} />
						</Switch>
					)}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
