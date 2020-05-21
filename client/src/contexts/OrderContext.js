import React, { createContext, useState } from 'react';
import axios from 'axios';
export const OrderContext = createContext();

const OrderContextProvider = (props) => {
	const [orders, setOrders] = useState([]);
	const [msg, setMsg] = useState();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [paymentChoice, setPaymentChoice] = useState('');

	//This is used to get the value for our PaymentChoice radio button
	//It updates our paymentChoice state.
	const selectPayChoice = (e) => {
		setPaymentChoice(e.target.value);
		console.log(paymentChoice);
		return paymentChoice;
	};

	//This is the fucntion that handles the submit button for placing an order and calls the placeOrder() function
	const handleSubmitOrder = (e, userId, product, grandTotal) => {
		e.preventDefault();
		const paymentStatus = 'unconfirmed';
		const deliveryStatus = 'Delivering';

		const order = {
			userId,
			products: product,
			orderTotal: grandTotal,
			paymentChoice,
			paymentStatus,
			deliveryStatus,
		};

		placeOrder(order);
		localStorage.setItem('cartProducts', JSON.stringify([]));
		localStorage.setItem('cartTotal', JSON.stringify(0));

		setTimeout(() => {
			setMsg('');
		}, 3000);
	};

	//This placeOrder() is used in our CheckOut.js Component to place orders
	//REQUEST TYPE: POST
	//URL: '/api/orders/place-orders'
	const placeOrder = async (order) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(
				`http://localhost:8080/api/orders/place-order`,
				order,
				config
			);

			setIsSubmitted(true);
			setMsg(res.data.message);
		} catch (err) {
			setIsSubmitted(false);
			setMsg(err.message);
		}
	};

	const getUserOrder = async (id) => {
		try {
			const res = await axios.get(`http://localhost:8080/api/orders/${id}`);

			if (!res) {
				setOrders([]);
			} else {
				setOrders(res.data.orders);
			}
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<OrderContext.Provider
			value={{
				orders,
				placeOrder,
				getUserOrder,
				msg,
				handleSubmitOrder,
				selectPayChoice,
				isSubmitted,
			}}>
			{props.children}
		</OrderContext.Provider>
	);
};

export default OrderContextProvider;
