import React from 'react';
import Navbar from '../Navbar';
import SearchTab from '../view-templates/Searchtab';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<SearchTab />

			<section className='container-fluid bg-white'>
				<div className='py-3'>
					<Link to='/' className='site-font text-decoration-none'>
						Home >{' '}
					</Link>{' '}
					<Link
						to='/cart/overview'
						className='active site-font text-decoration-none'>
						{' '}
						Dashboards
					</Link>
					<h1 className='site-font my-4'>Dashboard </h1>
				</div>
			</section>
		</>
	);
};

export default Dashboard;
