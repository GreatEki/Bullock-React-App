const express = require('express');
const router = express.Router();
const {
	placeOrder,
	getAllOrders,
	getOrdersByUser,
} = require('../controllers/order');

router.route('/').get(getAllOrders);

router.route('/:id').get(getOrdersByUser);

router.route('/place-order').post(placeOrder);

module.exports = router;
