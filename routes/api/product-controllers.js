var express = require('express');
const router = express.Router();

//Bring in our Models
const Product = require('../../models/product');

router.get('/:id', (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		if (!err) {
			return res.json(product);
		} else {
			res.json(`An error occurred: ${err}`);
		}
	});
});

router.get('/search/:value', (req, res) => {
	const value = req.params.value;

	//Asynchronous search based on search value;
	Product.find(
		{ $or: [{ title: value }, { category: value }, { brand: value }] },
		(err, products) => {
			if (!err) {
				if (products.length > 1) {
					return res.json(products);
				} else {
					res.json('No record of this found');
				}
			} else {
				res.json(err);
			}
		}
	);
});

module.exports = router;
