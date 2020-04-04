import React, { useContext, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './view-templates/Footer';
import { ProductContext } from '../contexts/ProductContext';
import Searchtab from './view-templates/Searchtab';

const Shop = () => {
	const { products, retrieveProd } = useContext(ProductContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		retrieveProd();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
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
						text-decoration-none'>
						{' '}
						Shop
					</Link>
					<h1 className='site-font my-4'>SHOP </h1>
				</div>
			</section>

			<main className='container wrapper'>
				<div className='row gallery'>
					{/* My Map method that loops through and return products listed in the database */}
					{products.map(product => {
						return (
							<div className='col-lg-3 col-12' key={product._id}>
								<div className='prod-card card mt-5'>
									<img
										className='shop-pic'
										src={`/products/${product.imagePath}`}
										alt='products'
									/>

									<div className='mt-5'>
										<h5 className='site-font text-center'>{product.title}</h5>
										<p className='site-font text-center'>
											<del className='del'> N </del> {product.price}
										</p>
									</div>

									<Link
										className='border buy-btn btn-sm btn-outline rounded text-center py-2 my-3 mx-3'
										role='button'
										to={`/product/${product._id}`}>
										Buy
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Shop;
