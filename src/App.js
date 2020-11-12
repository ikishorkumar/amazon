import './App.css';

import Header from './comps/Header';
import SubHeader from './comps/SubHeader';
import Home from './comps/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CheckOut from './comps/CheckOut';
function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<SubHeader />
				<Switch>
					<Route path="/CheckOut">
						<CheckOut />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
