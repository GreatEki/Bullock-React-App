import React, { useEffect } from 'react';
//import Navbar Template
import Navbar from './Navbar';

//Favourite Brands Imports
import Nike from './view-templates/Nike';
import Addidas from './view-templates/Addidas';
import Reebook from './view-templates/Reebook';
import Erke from './view-templates/Erke';
import Shoes from './view-templates/Shoes';
import Wallets from './view-templates/Wallets';

//Import WatchSlider Template
import WatchSlider from './view-templates/WatchSlider';

import SearchTab from './view-templates/Searchtab';

import Footer from './view-templates/Footer';

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	});
	return (
		<div className='wrapper'>
			<Navbar />
			<SearchTab />

			<div className='container-fluid mt-0 p-0'>
				<div className='row'>
					{/* *First Slider */}
					<div className='col-12'>
						<div
							id='carouselSlide'
							className='carousel slide'
							data-ride='carousel'>
							<ol className='carousel-indicators'>
								<li
									data-target='#carouselSlide'
									data-slide-to='0'
									className='active'>
									{' '}
								</li>
								<li data-target='#carouselSlide' data-slide-to='1'>
									{' '}
								</li>
								<li data-target='#carouselSlide' data-slide-to='2'>
									{' '}
								</li>
							</ol>

							<div className='carousel-inner'>
								<div className='carousel-item active'>
									<img
										src={'/webImage/bullock-logo.jpg'}
										alt=''
										className='d-block w-100 carousel-pics'
									/>
								</div>
								<div className='carousel-item'>
									<img
										src='/webImage/openshop.jpg'
										alt=''
										className='d-block w-100 carousel-pics'
									/>
								</div>
								<div className='carousel-item'>
									<img
										src='/webImage/jakob-owens.jpg'
										alt=''
										className='d-block w-100 carousel-pics'
									/>
								</div>
							</div>

							<a
								className='carousel-control-prev'
								href='#carouselSlide'
								role='button'
								data-slide='prev'>
								<span
									className='carousel-control-prev-icon'
									aria-hidden='true'></span>
							</a>
							<a
								className='carousel-control-next'
								href='#carouselSlide'
								role='button'
								data-slide='next'>
								<span
									className='carousel-control-next-icon'
									aria-hidden='true'></span>
							</a>
						</div>
					</div>
					{/* End of First Slider
                <div className=''> 
                    <div className="card offer">
                        <div className="card-body">
                        <ul> 
                            <li className='card-title stand text-primary'> Outstanding Footwears</li>
                            <li className='card-title stand text-info'> Quality Fashion Accessories</li>
                            <li className='card-title stand text-warning'> Premium Wears </li>
                            <li className='card-title stand text-success'> Custom Made Shoes  </li>
                        </ul>

                    </div>
                </div>
                </div>*/}
				</div>
			</div>

			{/*Card Brands Display */}
			<div className='container-fluid bg-container'>
				<div className='container'>
					<h3 className='my-3 py-3'> Favourite Brands </h3>
				</div>
				<hr />
			</div>

			{/*Sneaker Shoe Brands Display*/}

			<Nike />

			<Addidas />

			<Reebook />

			<Erke />
			{/*End of Sneaker Shoe Brand Display*/}

			{/* Second Slider Section (Watches)*/}
			<div className='container-fluid bg-container my-3'>
				<div className='container my-3 py-3'>
					<h3>Watches </h3>
				</div>
				<hr />
			</div>
			<div className='container-fluid'>
				<WatchSlider />
			</div>

			{/* Shoes Section */}
			<div className='container-fluid my-3'>
				<div className='container my-3 py-3'>
					<h3>Office Shoes</h3>{' '}
				</div>
				<hr />
			</div>

			{/*Shoe Section display*/}
			<Shoes />

			{/*End of Shoe Section display*/}

			{/* Wallet Section*/}
			<div className='container-fluid my-3'>
				<div className='container my-3 py-3'>
					<h3>Wallets </h3>
				</div>
				<hr />
			</div>

			<Wallets />
			{/*End of Wallet Section*/}

			<Footer />
		</div>
	);
};

export default Home;
