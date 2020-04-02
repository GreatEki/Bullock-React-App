import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
	const { cartItem } = useContext(CartContext);
	return (
		<>
			<div className='container mb-5'>
				<header>
					<div className='row'>
						<div className='col-12 col-sm-4 col-lg-3 mx-xs-auto mt-4'>
							<img
								src={'/webImage/bullock-logo.jpg'}
								alt='logo'
								className='logo'
							/>
						</div>

						<div className='col-12 col-lg-8'>
							<h1 className='lg-heading'>
								Bullock <small> Leather Works</small>{' '}
							</h1>
							<h3 className='motto'>Exquisitely Unique!!!</h3>
						</div>
					</div>
				</header>
			</div>
			<div className='container-fluid mt-0 p-0'>
				<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
					<div className='container'>
						<button
							className='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#mainNavbar'>
							<span className='navbar-toggler-icon'> </span>
						</button>

						<Link to='/' className='navbar-brand ml-lg-3'>
							<span> </span>
						</Link>

						<div className='collapse navbar-collapse'> </div>
						<div className='collapse navbar-collapse' id='mainNavbar'>
							<ul className='navbar-nav mr-5'>
								<Link className='nav-item nav-link site-font' to='/'>
									{' '}
									Home{' '}
								</Link>
								<Link className='nav-item nav-link site-font' to='/'>
									{' '}
									Account
								</Link>
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
								<Link to='/cart/overview' role='button' class='btn btn-info'>
									<i className='fas fa-shopping-cart 5x text-white'></i>
									<span className='site-font text-white'>
										{' '}
										Shopping Cart
									</span>{' '}
									<span class='badge badge-light'>{cartItem.length}</span>
								</Link>
							</div>
							<ul className='navbar-nav dropdown ml-lg-5'>
								<Link
									to='/'
									className='nav-link dropdown-toggle'
									id='navbarDropDown'
									role='button'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'>
									<i className='fas fa-user'></i>
								</Link>

								<div className='dropdown-menu' aria-labelledby='navbarDropDown'>
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
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
