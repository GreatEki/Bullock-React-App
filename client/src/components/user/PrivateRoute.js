import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { auth } = useContext(UserContext);
	return (
		<Route
			{...rest}
			render={(props) =>
				auth ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/users/signin' }} />
				)
			}
		/>
	);
};

export default PrivateRoute;
