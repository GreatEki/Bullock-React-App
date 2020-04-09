import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const UserContext = createContext();

const UserContextProvider = (props) => {
	let history = useHistory();
	const [message, setMessage] = useState('');
	const [token, setToken] = useState('');
	const [auth, setAuth] = useState(false);
	const [user, setUser] = useState({});

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
			setUser({
				id: res.data.user._id,
				firstname: res.data.user.firstname,
				lastname: res.data.user.lastname,
				email: res.data.user.email,
			});
			setToken(res.data.token);

			//Save Token in LocalStorage
			localStorage.setItem('auth', JSON.stringify(res.data.token));
			setAuth(true);
			history.push('/users/auth/dashboard');
		} catch (err) {
			//console.log(err);
			err.message = 'Invalid Credentials';
			setMessage(err.message);
		}
	};

	const logout = () => {
		setToken('');
		localStorage.removeItem('auth');
		history.push('/users/signin');
		window.location.reload(true);
	};
	return (
		<UserContext.Provider
			value={{ signUpUser, signInUser, message, auth, logout, user }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
