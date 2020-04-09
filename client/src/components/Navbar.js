import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
	const { cartItem } = useContext(CartContext);
	const { auth, logout } = useContext(UserContext);
	return (
		<>
			<header className='container-fluid m-0 p-0'>
				<h5 className='text-center header-text py-2'> Bullock-Leather-Works</h5>
			</header>

			<div className='container-fluid m-0 p-0 bg-nav'>
				<nav className='navbar navbar-expand-lg'>
					<div className='container'>
						<button
							className='navbar-toggler text-white'
							type='button'
							data-toggle='collapse'
							data-target='#mainNavbar'>
							<i className='navb-toggler-icon fas fa-bars'></i>
						</button>

						<Link to='/' className='navbar-brand ml-lg-3'>
							<span></span>
						</Link>

						<div className='collapse navbar-collapse'> </div>
						<div className='collapse navbar-collapse' id='mainNavbar'>
							<ul className='navbar-nav mr-5'>
								<Link className='nav-item nav-link site-font' to='/'>
									{' '}
									Home{' '}
								</Link>

								{auth ? (
									<Link
										className='nav-item nav-link site-font'
										to='/users/auth/dashboard'>
										{' '}
										Dashboard{' '}
									</Link>
								) : (
									<p></p>
								)}

								<Link className='nav-item nav-link site-font' to='/shop'>
									{' '}
									Shop
								</Link>
								<Link
									className='nav-item nav-link site-font'
									to='/how-to-order'>
									{' '}
									How To Order
								</Link>
								<Link className='nav-item nav-link site-font' to='/contact'>
									{' '}
									Contact US
								</Link>
							</ul>

							<div className='collapse navbar-collapse'> </div>
							<div>
								<Link
									to='/cart/overview'
									role='button'
									className='btn btn-info'>
									<i className='fas fa-shopping-cart 5x text-white'></i>
									<span className='site-font text-white'>
										{' '}
										Shopping Cart
									</span>{' '}
									<span className='badge badge-light'>{cartItem.length}</span>
								</Link>
							</div>

							{!auth ? (
								<ul className='navbar-nav dropdown ml-lg-5'>
									<Link
										to='/'
										className='nav-link dropdown-toggle'
										id='navbarDropDown'
										role='button'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'>
										<i className='fas fa-user text-white'></i>
									</Link>

									<div
										className='dropdown-menu'
										aria-labelledby='navbarDropDown'>
										<Link
											to='/users/signin'
											className='dropdown-item site-font-lg'>
											Sign-In
										</Link>
										<Link
											to='/users/signup'
											className='dropdown-item site-font-lg'>
											Sign-Up
										</Link>
									</div>
								</ul>
							) : (
								<button
									onClick={() => logout()}
									className='text-warning ml-3 p-2 text-white'>
									{' '}
									Logout{' '}
								</button>
							)}
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
