var express = require('express');
const router = express.Router();

//Bring in our Models
const Product = require('../../models/product');

router.get('/shop', (req, res) => {
	const getProducts = async () => {
		try {
			await Product.find({}, (err, products) => {
				return res.json(products);
			});
		} catch (err) {
			res.json(`Error occurred: ${err}`);
		}
	};

	getProducts();
});

module.exports = router;
