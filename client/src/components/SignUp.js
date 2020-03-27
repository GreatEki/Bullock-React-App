import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const SignIn = () => {
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

							<form className='mt-5'>
								<div className='form-group'>
									<label for='firstname'>FirstName</label>
									<input
										type='text'
										name='firstname'
										className='form-control rounded-0'
									/>
								</div>
								<div className='form-group'>
									<label for='lastname'> LastName </label>
									<input
										type='text'
										className='form-control rounded-0'
										name='lastname'
									/>
								</div>

								<div className='form-group'>
									<label for='email'> Email</label>
									<input
										type='email'
										className='form-control rounded-0'
										name='email'
									/>
								</div>

								<div className='form-group'>
									<label for='pword'> Password</label>
									<input
										type='password'
										className='form-control rounded-0'
										name='pword'
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
