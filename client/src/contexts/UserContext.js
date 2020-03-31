import React, { createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = props => {
	//This registers a new User
	const signUpUser = async newUser => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const res = await axios.post(
				'http://localhost:8080/api/users/signup',
				newUser,
				config
			);

			console.log(res);
		} catch (err) {}
	};

	//Function to signIn user
	const signInUser = async user => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		try {
			const res = await axios.post(
				'http://localhost:8080/api/users/signin',
				user,
				config
			);

			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<UserContext.Provider value={{ signUpUser, signInUser }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
