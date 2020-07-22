import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const SignIn = () => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { signUpUser, message } = useContext(UserContext);

	const handleSubmit = e => {
		e.preventDefault();

		const newUser = {
			firstname,
			lastname,
			email,
			password
		};
		signUpUser(newUser);
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
					<h1 className='site-font my-4'>Sign-Up </h1>
				</div>
			</section>

			<main className='mt-5'>
				<section className='container'>
					<div className='row'>
						<div className='col-lg-6 col-12 offset-lg-3'>
							<h2 className='site-font text-center'> Registration </h2>

							{message ? (
								<p className='alert alert-danger' role='alert'>
									{' '}
									{message}{' '}
								</p>
							) : (
								<p> </p>
							)}
							<form className='mt-5' onSubmit={e => handleSubmit(e)}>
								<div className='form-group'>
									<label htmlFor='firstname'>FirstName</label>
									<input
										type='text'
										name='firstname'
										onChange={e => setFirstname(e.target.value)}
										value={firstname}
										className='form-control rounded-0'
										required
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='lastname'> LastName </label>
									<input
										type='text'
										className='form-control rounded-0'
										onChange={e => setLastname(e.target.value)}
										value={lastname}
										className='form-control rounded-0'
										name='lastname'
										required
									/>
								</div>

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
									<label htmlFor='pword'> Password</label>
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
									Already have an account? -{' '}
									<Link to='/users/signin'> Sign-In </Link>
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
