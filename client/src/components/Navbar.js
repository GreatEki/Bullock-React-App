import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='container-fluid mt-0 p-0'>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container'>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#mainNavbar'
					>
						<span className='navbar-toggler-icon'> </span>
					</button>

					<a href='/' className='navbar-brand ml-lg-3'>
						<span> </span>
					</a>

					<div className='collapse navbar-collapse'> </div>
					<div className='collapse navbar-collapse' id='mainNavbar'>
						<ul className='navbar-nav mr-5'>
							<Link className='nav-item nav-link site-font' to='/'>
								{' '}
								Home{' '}
							</Link>
							<Link className='nav-item nav-link site-font' to='/'>
								{' '}
								Services
							</Link>
							<Link className='nav-item nav-link site-font' to='/shop'>
								{' '}
								Shop
							</Link>
							<Link className='nav-item nav-link site-font' to='/cart/overview'>
								{' '}
								Cart
							</Link>
							<Link className='nav-item nav-link site-font' to='/contact'>
								{' '}
								Contact US
							</Link>
						</ul>

						<div className='collapse navbar-collapse'> </div>
						<ul className='navbar-nav dropdown ml-lg-5'>
							<a
								href='/'
								className='nav-link dropdown-toggle'
								id='navbarDropDown'
								role='button'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								<i className='fas fa-user'></i>
							</a>

							<div className='dropdown-menu' aria-labelledby='navbarDropDown'>
								<a href='/' className='dropdown-item site-font'>
									Sign-In
								</a>
								<a href='/' className='dropdown-item site-font'>
									Sign-Up
								</a>
							</div>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
