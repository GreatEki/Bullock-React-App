import React, { createContext, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [message, setMessage] = useState('');
	const [token, setToken] = useState('');
	const [auth, setAuth] = useState(true);

	//This registers a new User
	const signUpUser = async (newUser) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(
				'http://localhost:8080/api/users/signup',
				newUser,
				config
			);

			//console.log(res);
			setMessage(res.data.message);
		} catch (err) {
			err.message = 'Registration Failed';
			setMessage(err.message);
		}
	};

	//Function to signIn user
	const signInUser = async (user) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post(
				'http://localhost:8080/api/users/signin',
				user,
				config
			);

			console.log(res);
			setMessage(res.data.message);
			setToken(res.data.token);

			//Save Token in LocalStorage
			localStorage.setItem('auth', JSON.stringify(res.data.token));

			props.history.push('/users/auth/account');
		} catch (err) {
			//console.log(err);
			err.message = 'Invalid Credentials';
			setMessage(err.message);
		}
	};
	return (
		<UserContext.Provider value={{ signUpUser, signInUser, message, auth }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default withRouter(UserContextProvider);
