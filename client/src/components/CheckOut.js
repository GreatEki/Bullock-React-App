import React from 'react';
import Navbar from './Navbar';
import Searchtab from './view-templates/Searchtab';
import { Link } from 'react-router-dom';
const Checkout = () => {
	return (
		<main>
			<Navbar />
			<Searchtab />

			<section className='container-fluid bg-white'>
				<div className='py-3'>
					<Link to='/' className='site-font text-decoration-none'>
						Home >{' '}
					</Link>{' '}
					<Link
						to='/cart/overview'
						className='active site-font
						text-decoration-none'
					>
						{' '}
						Shop >
					</Link>
					<Link
						to='/cart/checkout'
						className='active site-font
						text-decoration-none'
					>
						{' '}
						CheckOut
					</Link>
					<h1 className='site-font my-4'>CHECKOUT </h1>
				</div>
			</section>

			{/* Checkout Form Page */}
			<main className='container my-5'>
				<div>
					<h3 className='text-right'> GRAND TOTAL: </h3>
				</div>

				<div className='row my-5'>
					<div className='col-8 offset-lg-2 bg-white'>
						{/* Order Summary Section */}
						<div className='row px-4'>
							<div className='col-8 mt-5'>
								<h5> PRODUCT </h5>
							</div>

							<div className='col-4 mt-5'>
								<h5 className='text-right'> SUBTOTAL </h5>
							</div>
						</div>

						{/* Products details are listed here*/}
						<div className='row px-4'>
							<div className='col-8 mt-5'>
								<p> Addidas All Star </p>
								<p>size_40</p>
								<p> 2 qty </p>
							</div>

							<div className='col-4 mt-5'>
								<p className='text-right'>
									{' '}
									<del className='del'>N</del> 6 000{' '}
								</p>
							</div>
						</div>
						<div className='row px-4'>
							<div className='col-8 mt-5'>
								<h5 className='site-font'> SUBTOTAL </h5>
							</div>

							<div className='col-4 mt-5'>
								<p className='text-right'>
									<del className='del'>N</del> 12 000
								</p>
							</div>
						</div>
						<div className='row px-4'>
							<div className='col-8 mt-5'>
								<h5 className='site-font'> DELIVERY CHARGE </h5>
							</div>

							<div className='col-4 mt-5'>
								<p className='text-right'>
									<del className='del'>N</del> 1 000
								</p>
							</div>
						</div>
						<div className='row px-4'>
							<div className='col-8 mt-5'>
								<h5 className='site-font text-danger'> GRAND TOTAL </h5>
							</div>

							<div className='col-4 mt-5'>
								<p className='text-right'>
									<del className='del'>N</del> 13 000
								</p>
							</div>
						</div>
						<hr />
						{/* Shipping Section */}
						<div className='px-4'>
							<h5> SHIPPING FEES </h5>
						</div>
						<hr />
						<p className='text-justify px-4 site-font'>
							<span className='text-danger'>NOTE: </span>
							Please be informed that Standard Shipping rates may vary based on
							location. Kindly go through the charges incurable for different
							locations.
						</p>

						{/* Tier One Location */}
						<bold className='site-font my-3'>
							<h5 className='px-4 text-muted text-center'>
								{' '}
								TIER ONE LOCATIONS
							</h5>
						</bold>
						<section className='row px-4'>
							<div className='col-4 site-font'>
								<h5>LAGOS</h5>
							</div>
							<div className='col-4 site-font'>
								<h5 className='text-center'> PRICE </h5>
							</div>

							<div className='col-4 site-font'>
								<h5 className='text-right'> DELIVERY TIMELINE</h5>
							</div>
						</section>
						<section className='row px-4'>
							<div className='col-4 site-font'>
								<h5>
									This categorizes major cities and urban centres in Lagos.
								</h5>
							</div>
							<div className='col-4 site-font'>
								<h5 className='text-center'>
									{' '}
									<del className='del'>N </del>1, 000{' '}
								</h5>
							</div>

							<div className='col-4 site-font'>
								<h5 className='text-right'> 1 -2 days</h5>
							</div>
						</section>

						<bold className='site-font my-4'>
							<h5 className='px-4 text-muted text-center'>
								{' '}
								TIER TWO LOCATIONS
							</h5>
						</bold>

						<section className='row px-4'>
							<div className='col-4 site-font'>
								<h5>OGUN, IBADAN, ABEOKUTA, ABUJA, PORT-HACOURT</h5>
							</div>
							<div className='col-4 site-font'>
								<h5 className='text-center'>
									{' '}
									<del className='del'>N </del>2, 300{' '}
								</h5>
							</div>

							<div className='col-4 site-font'>
								<h5 className='text-right'> 3 - 5 </h5>
							</div>
						</section>

						<bold className='site-font my-4'>
							<h5 className='px-4 text-muted text-center'>
								{' '}
								TIER THREE LOCATIONS
							</h5>
						</bold>

						<section className='row px-4'>
							<div className='col-4 site-font'>
								<small className='text-justify'>
									This comprises certain cities in Lagos and other states across
									the federation.
								</small>
								<p>
									{' '}
									Iyana-Ibeshe, Iyana-Ipaja, Majidun, Okokomaiko and Other
									States{' '}
								</p>
							</div>
							<div className='col-4 site-font'>
								<h5 className='text-center'>
									{' '}
									<del className='del'>N </del>3, 000{' '}
								</h5>
							</div>

							<div className='col-4 site-font'>
								<h5 className='text-right'> 5 days </h5>
							</div>
						</section>
					</div>
				</div>
			</main>
		</main>
	);
};

export default Checkout;
