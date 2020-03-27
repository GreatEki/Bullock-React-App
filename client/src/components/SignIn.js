import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
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
						<div className='col-lg-6 offset-lg-3'>
							<h2 className='site-font text-center'> Login </h2>

							<form className='mt-5'>
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
