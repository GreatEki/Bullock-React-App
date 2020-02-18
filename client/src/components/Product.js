import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { ProductContext } from '../contexts/ProductContext';
import { Link } from 'react-router-dom';
import HowToOrder from './view-templates/HowToOrder';
import Footer from './view-templates/Footer';
import { CartContext } from '../contexts/CartContext';

const Product = props => {
	var id = props.match.params.id;
	//console.log(id);
	const { getProd, product } = useContext(ProductContext);
	const { addToCart } = useContext(CartContext);

	const [size, setSize] = useState('');
	const [qty, setQty] = useState(Number);

	useEffect(() => {
		getProd(id);
		//console.log(product);
	}, [id]);

	const handleSubmit = e => {
		e.preventDefault();
		addToCart(product, size, qty);
	};

	return (
		<main>
			<Navbar />

			<div className='container-fluid bg-container'>
				<div className='container'>
					<h3 className='my-5 py-3'> ----Product </h3>
				</div>
			</div>

			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 offset-lg-3'>
						<img
							src={`/products/${product.imagePath}`}
							alt={product.title}
							className='img-product'
						/>

						<h2 className='site-font text-center mt-3'> {product.title} </h2>
						<h3>
							{' '}
							<del className='del'>N </del>
							{product.price}{' '}
						</h3>

						<p className='site-font'>
							Read our
							<Link to='/how-to-order' className='link'>
								"How to Order"
							</Link>
							and policy on
							<Link to='/delivery' className='link'>
								"Delivery"
							</Link>
							and
							<Link to='/delivery-timelines' className='link'>
								Delivery Time
							</Link>
							to properly place your order or simply scroll down to Read.
						</p>

						<form onSubmit={e => handleSubmit(e)}>
							<h3 className='site-font'> Select your size </h3>
							<div className='form-group site-font'>
								<select
									className='form-control'
									onChange={e => setSize(e.target.value)}
									value={size}
								>
									<option value='32'>Size 32</option>
									<option value='33'>Size 33</option>
									<option value='34'>Size 34</option>
									<option value='35'>Size 35</option>
									<option value='36'>Size 36</option>
									<option value='37'>Size 37</option>
									<option value='38'>Size 38</option>
									<option value='39'>Size 39</option>
									<option value='40'>Size 40</option>
									<option value='41'>Size 41</option>
									<option value='42'>Size 42</option>
									<option value='43'>Size 43</option>
									<option value='44'>Size 44</option>
									<option value='45'>Size 45</option>
									<option value='46'>Size 46</option>
									<option value='47'>Size 47</option>
									<option value='48'>Size 48</option>
								</select>
							</div>

							<div>
								<p> Enter the quantity you wish to purchase below: </p>

								<input
									type='text'
									className='form-control mb-5'
									onChange={e => setQty(parseInt(e.target.value))}
									value={qty}
								/>

								<button
									className='btn buy-btn btn-block rounded btn-md btn-warning'
									type='submit'
								>
									Add To Cart
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<HowToOrder />

			<Footer />
		</main>
	);
};

export default Product;
