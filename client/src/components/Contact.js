import React from 'react';
import Navbar from './Navbar';
import SearcTab from './view-templates/Searchtab';
import { Link } from 'react-router-dom';

const Contact = () => {
	return (
		<main className='wrapper'>
			<Navbar />
			<SearcTab />

			<section className='container-fluid bg-white'>
				<div className='py-3'>
					<Link to='/' className='site-font text-decoration-none'>
						Home >{' '}
					</Link>{' '}
					<Link
						to='/cart/overview'
						className='active site-font
						text-decoration-none'>
						{' '}
						Contact-Us
					</Link>
					<h1 className='site-font my-4'>Contact </h1>
				</div>
			</section>

			<div className='container'>
				<div className='title mt-4 mb-4'>---- Contact</div>
			</div>

			<div className='container mb-5'>
				<p className='ml-md-5 font-weight-bold'>You can reach us via:</p>
				<div className='row'>
					<div className='col-md-8 offset-md-2 col-12'>
						<div className='d-flex flex-column '>
							<p className='address'>
								<span>Email: </span> bullockcoutoures@gmail.com
							</p>
							<p className='address'>
								<span>Phone No: </span> +234 (0)70 1222 9813
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='container'>
				<p className='ml-md-5 font-weight-bold'>We are opened:</p>
				<h2 className='days-open'>Mondays - Fridays (8:00am - 8:00pm)</h2>
			</div>
		</main>
	);
};

export default Contact;
