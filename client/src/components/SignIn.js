import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { UserContext } from '../contexts/UserContext';
const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { signInUser, message } = useContext(UserContext);

	//Function to handle submitting for authentication
	const handleSubmit = e => {
		e.preventDefault();

		const user = {
			email,
			password
		};

		signInUser(user);
	};
	return (
		<>
			<Navbar />

			<section className='container-fluid bg-white'>
				<div className='py-3'>
					<Link to='/users/signup' className='site-font text-decoration-none'>
						User >{' '}
					</Link>{' '}
					<Link
						to='/users/signup'
						className='active site-font
						text-decoration-none'>
						{' '}
						SignUp
					</Link>
					<h1 className='site-font my-4'>Sign-In </h1>
				</div>
			</section>

			<main className='mt-5'>
				<section className='container'>
					<div className='row'>
						<div className='col-lg-6 offset-lg-3'>
							<h2 className='site-font text-center'> Sign-In To Account </h2>

							{message ? (
								<div className='text-danger text-center' role='alert'>
									{' '}
									{message}{' '}
								</div>
							) : (
								<p> </p>
							)}
							<form className='mt-5' onSubmit={e => handleSubmit(e)}>
								<div className='form-group'>
									<label htmlFor='email'> Email</label>
									<input
										type='email'
										className='form-control rounded-0'
										onChange={e => setEmail(e.target.value)}
										value={email}
										name='email'
										required
									/>
								</div>

								<div className='form-group'>
									<label htmlFor='password'> Password</label>
									<input
										type='password'
										className='form-control rounded-0'
										onChange={e => setPassword(e.target.value)}
										value={password}
										name='password'
										required
									/>
								</div>

								<button
									type='submit'
									className=' btn btn-md btn-block btn-warning '>
									{' '}
									Submit{' '}
								</button>
							</form>

							<section className='my-3'>
								<p>
									Don't have an account? -{' '}
									<Link to='/users/signup'> Sign-Up </Link>
								</p>
							</section>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default SignIn;
