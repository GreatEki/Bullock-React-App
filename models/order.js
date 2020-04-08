const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: [true, 'User has to have an account to place orders'],
	},

	products: {
		type: Array,
		default: [],
		required: true,
	},

	paymentChoice: {
		type: String,
		required: true,
	},
	paymentStatus: {
		type: String,
		required: true,
	},
	deliveryStatus: {
		type: String,
		required: true,
	},
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
