import React, { useEffect } from 'react';
import './App.css';
import Header from './comps/Header';
import SubHeader from './comps/SubHeader';
import Home from './comps/Home';
import Orders from './comps/Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CheckOut from './comps/CheckOut';
import LoginPage from './comps/LoginPage';
import { auth } from './config/Firebase';
import { useStateValue } from './config/StateProvider';
import Payment from './comps/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const promise = loadStripe(
	'pk_test_51HnoNDKEL92aCuxLtnC8hgrUF7B4vx3uVUIxcbVLhfscEspn0q86F3FgxltK7Z3a7lXbp9TlNndqPEjW00K1h6lz00RUrzHDqn'
);
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
					<Route path="/Orders">
						<Header />
						<SubHeader />
						<Orders />
					</Route>
					<Route path="/CheckOut">
						<Header />
						<SubHeader />
						<CheckOut />
					</Route>
					<Route path="/Payment">
						<Header />
						<SubHeader />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
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
