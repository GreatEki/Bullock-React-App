import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import { withRouter } from 'react-router-dom';

export const CartContext = createContext();

const CartContextProvider = props => {
	//This is the state we update when we call the addToCart() function
	const [cartItem, setCartItem] = useState([]);

	//This is the state that displays the products in the Cart Page
	const [cartProducts, setCartProducts] = useState([]);

	const addToCart = (product, size, qty) => {
		//e.preventDefault();

		var val = uuid();

		var item = product[val];

		if (!item) {
			item = product[val] = {
				id: val,
				title: product.title,
				imagePath: product.imagePath,
				size: size,
				qty: qty,
				price: product.price * qty
			};
		}

		setCartItem(cartItem => [...cartItem, item]);

		//localStorage.setItem('cartProducts', JSON.stringify(cartItem));

		props.history.push('/cart/overview');
	};

	//Function to retrieve products in the Cart Page
	const getCartItems = () => {
		var localData = localStorage.getItem('cartProducts');
		var result = JSON.parse(localData);
		setCartProducts(result);
	};

	return (
		<CartContext.Provider
			value={{ addToCart, cartProducts, getCartItems, cartItem }}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default withRouter(CartContextProvider);
