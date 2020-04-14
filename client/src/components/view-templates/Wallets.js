import React, { useContext, useEffect } from 'react';
import { HomeContext } from '../../contexts/HomeContext';
import { Link } from 'react-router-dom';
const Wallets = () => {
	const { getWallets, wallets } = useContext(HomeContext);

	useEffect(() => {
		getWallets();
		//eslint-disabe-next-line react-hooks/exhaustive/deps
	}, []);
	return (
		<>
			<div className='container'>
				<div className='row'>
					{wallets.map((prod) => {
						return (
							<Link
								to={`/product/${prod._id}`}
								className='col-lg-4 shoe-and-wallets'
								key={prod._id}>
								<div className='row no-gutters'>
									<div className='col-6'>
										<img
											src={`/products/${prod.imagePath}`}
											className='card-img p-0'
											alt=' '
										/>
									</div>
									<div className='col-6'>
										<div className='card-body'>
											<h5 className='card-title text-center site-font'>
												{prod.title}
											</h5>
											<p className='card-text text-center site-font'>
												<del className='del'>N</del> 25, 000
											</p>
											<p className='card-text text-center site-font'>
												{' '}
												brand: <small>{prod.brand}</small>
											</p>
										</div>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Wallets;
