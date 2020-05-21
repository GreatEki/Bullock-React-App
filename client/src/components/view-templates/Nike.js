import React, { useContext, useEffect } from 'react';
import { HomeContext } from '../../contexts/HomeContext';
import { Link } from 'react-router-dom';

const Nike = () => {
	const { getNikeProducts, nikeProd } = useContext(HomeContext);

	useEffect(() => {
		getNikeProducts();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className='container'>
				<div className='row'>
					{nikeProd.map((prod) => {
						return (
							<div className='col-md-4 col-sm-12' key={prod._id}>
								<Link to={`/product/${prod._id}`} className='card-links'>
									<div className='card mb-3 mt-3'>
										<div className='row no-gutters brand-items'>
											<div className='col-6'>
												<img
													src={`/products/${prod.imagePath}`}
													className='shop-pic brand-pic p-0 img-fluid'
													alt=' '
												/>
											</div>
											<div className='col-6'>
												<div className='card-body'>
													<h5 className='card-title text-center'>
														<del className='del'>N</del>
														{prod.price}
													</h5>
													<p className='card-text text-center text-muted prod-title'>
														{' '}
														{prod.title}
													</p>
													<p className='card-text text-center'>
														{' '}
														brand:{' '}
														<small className='text-danger'>{prod.brand}</small>
													</p>
												</div>
											</div>
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Nike;
