import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Users from './pages/Users';

function App() {
	return (
		<Router>
			<div className="app">
				<TopBar />

				<div className="app__container">
					{/* Left side bar */}
					<div className="app__side-bar">
						<SideBar />
					</div>

					{/* Pages */}
					<div className="app__pages">
						<Switch>
							<Route path="/users">
								<Users />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
