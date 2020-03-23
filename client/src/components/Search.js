import React, { useEffect, useContext } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import Searchtab from './view-templates/Searchtab';

const Search = props => {
	const val = props.match.params.val;
	const { searchProd, handleSearch } = useContext(ProductContext);

	useEffect(() => {
		handleSearch(val);
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [val]);
	return (
		<main>
			<Navbar />
			<Searchtab />

			<section className='container'>
				<h4 className='site-font text-center'>
					{' '}
					Search Result for <b>'{val}'</b>
				</h4>
				<p className='site-font text-center'>
					{' '}
					{searchProd.length} items found{' '}
				</p>
				<div className='row gallery'>
					{/* My Map method that loops through and return products listed in the database */}
					{searchProd.map(product => {
						return (
							<div className='col-lg-3 col-6' key={product._id}>
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
										to={`/product/${product._id}`}
									>
										Buy
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</main>
	);
};

export default Search;
