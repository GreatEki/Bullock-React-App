import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import { withRouter } from 'react-router-dom';

export const CartContext = createContext();

const CartContextProvider = (props) => {
	//This is the state we update when we call the addToCart() function
	const [cartItem, setCartItem] = useState([]);

	//This reps our CartTotal Price
	let [totalPrice, setTotalPrice] = useState(0);

	//This reps the charge on delivery
	const [deliveryRate, setDeliveryRate] = useState(1000);

	//This watches our cartItem state and updates LocalStorage whenever a change occurs
	useEffect(() => {
		localStorage.setItem('cartProducts', JSON.stringify(cartItem));
		localStorage.setItem('cartTotal', JSON.stringify(totalPrice));
	}, [cartItem, totalPrice]);

	const addToCart = (product, size, qty) => {
		var val = uuid();

		var item = product[val];

		if (!item) {
			item = product[val] = {
				id: val,
				title: product.title,
				imagePath: product.imagePath,
				size: size,
				qty: qty,

				price: product.price * qty,
			};
		}

		setTotalPrice((totalPrice) => (totalPrice += item.price));
		setCartItem((cartItem) => [...cartItem, item]);

		props.history.push('/shop');
	};

	//Function to retrieve products in the Cart Page
	const getCartItems = () => {
		var localCart = localStorage.getItem('cartProducts');
		var localCartRs = JSON.parse(localCart);
		//JSON.parse() converts a JSON string into a Javascript object
		setCartItem(localCartRs);

		var localTotal = localStorage.getItem('cartTotal');
		var localTotalRs = JSON.parse(localTotal);
		setTotalPrice(localTotalRs);
	};

	const removeItem = (prod) => {
		setCartItem(cartItem.filter((item) => item.id !== prod.id));
		localStorage.setItem('cartProducts', JSON.stringify(cartItem));
		//Reset the totalPrice to reflect the new Price
		setTotalPrice((totalPrice) => (totalPrice -= prod.price));
		localStorage.setItem('cartTotal', JSON.stringify(totalPrice));
		return cartItem;
	};

	return (
		<CartContext.Provider
			value={{
				addToCart,
				getCartItems,
				cartItem,
				totalPrice,
				deliveryRate,
				removeItem,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default withRouter(CartContextProvider);
