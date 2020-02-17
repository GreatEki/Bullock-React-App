import React, { createContext, useState } from 'react';
import uuid from 'uuid/v4';
import { withRouter } from 'react-router-dom';

export const CartContext = createContext();

const CartContextProvider = props => {
	const [cartItem, setCartItem] = useState([]);
	const addToCart = (e, product, size, qty) => {
		e.preventDefault();

		var val = uuid();

		var item = product[val];

		if (!item) {
			item = product[val] = {
				title: product.title,
				imagePath: product.imagePath,
				size: size,
				qty: qty,
				price: product.price * qty
			};
		}

		setCartItem([...cartItem, item]);
		//console.log(cartItem);
		localStorage.setItem('cartProducts', JSON.stringify(cartItem));

		props.history.push('/cart/overview');
	};
	return (
		<CartContext.Provider value={{ addToCart }}>
			{props.children}
		</CartContext.Provider>
	);
};

export default withRouter(CartContextProvider);
