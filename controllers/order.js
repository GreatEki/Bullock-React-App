const Order = require('../models/order');

//DESC:  Places an order for a customer
//URL: '/api/orders/place-orders'
//REQUEST TYPE: POST
exports.placeOrder = async (req, res) => {
	try {
		const {
			userId,
			products,
			orderTotal,
			paymentChoice,
			paymentStatus,
			deliveryStatus,
		} = req.body;

		const newOrder = new Order({
			userId,
			products,
			orderTotal,
			paymentChoice,
			paymentStatus,
			deliveryStatus,
		});

		const savedOrder = await Order.create(newOrder);

		return res.status(201).json({
			success: true,
			message: 'Order placed Successfully',
			order: {
				userId: savedOrder.userId,
				paymentChoice: savedOrder.paymentChoice,
				paymentStatus: savedOrder.paymentStatus,
				deliveryStatus: savedOrder.deliveryStatus,
				products: savedOrder.products,
				orderTotal: savedOrder.orderTotal,
			},
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: 'Server error',
			error: err.message,
		});
	}
};

//DESC: Fetches all orders from the database
//URL: '/api/orders'
//REQUEST TYPE: GET
exports.getAllOrders = (req, res) => {
	Order.find({})
		.populate({ path: 'userId', model: 'User' })
		.then((orders) => {
			res.status(200).json({
				success: true,
				message: 'All orders fetched successfully',
				count: orders.length,
				orders: orders.map((order) => {
					return {
						userId: order.userId,
						paymentChoice: order.paymentChoice,
						paymentStatus: order.paymentStatus,
						deliveryStatus: order.deliveryStatus,
						products: order.products,
						orderTotal: order.orderTotal,
					};
				}),
			});
		})
		.catch((err) => {
			res.status(500).json({
				success: false,
				message: 'Server Error',
				error: err.message,
			});
		});
};

exports.getOrdersByUser = async (req, res) => {
	try {
		const userId = req.params.id;

		const orders = await Order.find({ userId }).populate({
			path: 'userId',
			model: 'User',
		});

		return res.status(200).json({
			success: true,
			message: 'Users orders fetched successfully',
			count: orders.length,
			orders: orders.map((order) => {
				return {
					userId: order.userId,
					products: order.products,
					paymentChoice: order.paymentChoice,
					paymentStatus: order.paymentStatus,
					deliveryStatus: order.deliveryStatus,
					orderTotal: order.orderTotal,
				};
			}),
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: 'Server error',
			error: err.message,
		});
	}
};
