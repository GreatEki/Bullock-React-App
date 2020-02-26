import React from 'react';

const Delivery = () => {
	return (
		<main>
			{/* Shipping Section */}
			<hr />
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
				<h5 className='px-4 text-muted text-center'> TIER ONE LOCATIONS</h5>
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
					<h5>This categorizes major cities and urban centres in Lagos.</h5>
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
				<h5 className='px-4 text-muted text-center'> TIER TWO LOCATIONS</h5>
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
				<h5 className='px-4 text-muted text-center'> TIER THREE LOCATIONS</h5>
			</bold>

			<section className='row px-4'>
				<div className='col-4 site-font'>
					<small className='text-justify'>
						This comprises certain cities in Lagos and other states across the
						federation.
					</small>
					<p>
						{' '}
						Iyana-Ibeshe, Iyana-Ipaja, Majidun, Okokomaiko and Other States{' '}
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
		</main>
	);
};

export default Delivery;
