import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useHistory } from 'react-router-dom';
// import { useStateValue } from '../config/StateProvider';
import { Button } from '@material-ui/core';
import { auth } from '../config/Firebase';
function LoginPage() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const signIn = (e) => {
		e.preventDefault();
		//  firebase login
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((error) => alert(error.message));
	};
	const register = (e) => {
		e.preventDefault();
		// firebase registration

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// if user is successfully created the user with password and email
				if (auth) {
					history.push('/');
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="_login">
			<Link to="/">
				<img
					className="_login_logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
					alt="Amazon"
				/>
			</Link>
			<div className="_loginInfoContainer">
				<h1 className="_login_title">Sign-In</h1>
				<form>
					<label htmlFor="_inputEmail">
						📧 email or 📱 mobile phone number
					</label>
					<input
						type="text"
						name="_inputEmail"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label htmlFor="_inputPassword"> 🔑 password </label>
					<input
						type="password"
						name="_inputPassword"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Button className="_signInBtn" type="submit" onClick={signIn}>
						Continue
					</Button>
				</form>
			</div>
			<p className="_createAccountTitle">New to Amazon?</p>
			<Button className="_createAccount" onClick={register}>
				Create your Amazon account
			</Button>
		</div>
	);
}

export default LoginPage;
