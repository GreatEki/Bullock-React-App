import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import { withRouter } from 'react-router-dom';

export const CartContext = createContext();

const CartContextProvider = props => {
	//This is the state we update when we call the addToCart() function
	const [cartItem, setCartItem] = useState([]);

	//This is the state that displays the products in the Cart Page
	const [cartProducts, setCartProducts] = useState([], () => {
		var localData = localStorage.getItem('cartProducts');
		return localData ? JSON.parse(localData) : [];
	});

	//This reps our CartTotal Price
	let [totalPrice, setTotalPrice] = useState(0);

	//This reps the charge on delivery
	const [deliveryRate, setDeliveryRate] = useState(1000);

	const validate = (size, qty) => {
		let errors = {};
		if (!size || size === 'nil') {
			errors.size = 'Choose your size appropriately';
		}
		if (!qty || qty === 0) {
			errors.qty = 'Enter the quantity you wish to puchase';
		}

		return errors;
	};

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

		setTotalPrice(totalPrice => (totalPrice += item.price));
		setCartItem(cartItem => [...cartItem, item]);

		//localStorage.setItem('cartProducts', JSON.stringify(cartItem));

		props.history.push('/cart/overview');
	};

	//Function to retrieve products in the Cart Page
	const getCartItems = () => {
		var localData = localStorage.getItem('cartProducts');
		var result = JSON.parse(localData);
		//JSON.parse() converts a JSON string into a Javascript object
		setCartProducts(result);
	};

	const removeItem = prod => {
		setCartItem(cartProducts.filter(item => item.id !== prod.id));
		localStorage.setItem('cartProducts', JSON.stringify(cartItem));

		//Reset the totalPrice to reflect the new Price
		setTotalPrice(totalPrice => (totalPrice -= prod.price));
		return cartItem;
	};

	return (
		<CartContext.Provider
			value={{
				addToCart,
				cartProducts,
				getCartItems,
				cartItem,
				totalPrice,
				validate,
				deliveryRate,
				removeItem
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default withRouter(CartContextProvider);
