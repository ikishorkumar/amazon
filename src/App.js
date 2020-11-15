import React, { useEffect } from 'react';
import './App.css';
import Header from './comps/Header';
import SubHeader from './comps/SubHeader';
import Home from './comps/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CheckOut from './comps/CheckOut';
import LoginPage from './comps/LoginPage';
import { auth } from './config/Firebase';
import { useStateValue } from './config/StateProvider';
function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		// Only runs Ones when app component loads .........
		auth.onAuthStateChanged((authUser) => {
			console.log('The User IS ----> ', authUser);
			if (authUser) {
				// if user hust logged in the user was login already
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/LoginPage">
						<LoginPage />
					</Route>
					<Route path="/CheckOut">
						<Header />
						<SubHeader />
						<CheckOut />
					</Route>
					<Route path="/">
						<Header />
						<SubHeader />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
