const Product = require('../models/product');

//DESC: This method handles the search system in our Page.
//URL: ''/search/:value'
//REQUEST TYPE: GET request
exports.searchByChoice = (req, res) => {
	const value = req.params.value;

	//Asynchronous search based on search value;
	Product.find(
		{ $or: [{ title: value }, { category: value }, { brand: value }] },
		(err, products) => {
			if (!err) {
				if (products.length > 1) {
					return res.json(products);
				} else {
					return res.status(400).json({
						success: false,
						error: 'No record of this found',
					});
				}
			} else {
				return res.json(err);
			}
		}
	);
};

//DESC: 'This method is used to fetch and individual product that a customer has selected for purchase'
//URL: '/api/product/:id'
//REQUEST TYPE: GET request
exports.getProductById = (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		if (!err) {
			return res.json(product);
		} else {
			res.json(`An error occurred: ${err}`);
		}
	});
};

//DESC: This fetches nike products
//URL: '/api/product/nike'
//REQUEST TYPE: GET REQUEST
exports.getNike = async (req, res) => {
	try {
		const nike = 'nike';
		const Nike = 'Nike';
		const nikeProd = await Product.find({
			$or: [{ brand: nike }, { brand: Nike }],
		}).limit(3);

		return res.status(200).json({
			success: true,
			message: 'Nike Products fetched from database',
			count: nikeProd.length,
			nikeSneakers: nikeProd,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: 'Server error',
			error: err.message,
		});
	}
};

//DESC: 'This method fetches addidas products'
//URL: '/api/product/addidas'
//REQUEST TYPE: GET request
exports.getAddidas = async (req, res) => {
	try {
		const addidasProd = await Product.find({
			$or: [{ brand: 'Addidas' }, { brand: 'addidas' }],
		}).limit(3);

		return res.status(200).json({
			success: true,
			message: 'Addidas products fetched',
			count: addidasProd.length,
			addidasSneakers: addidasProd,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: 'Server error',
			error: err.message,
		});
	}
};

//DESC: 'This method fetches reebook products'
//URL: '/api/product/reebook'
//REQUEST TYPE: GET request
exports.getReebook = async (req, res) => {
	try {
		const reebookProd = await Product.find({
			$or: [{ brand: 'Reebook' }, { brand: 'reebook' }],
		}).limit(3);

		return res.status(200).json({
			success: true,
			message: 'Reebook prooducts fetched',
			count: reebookProd.length,
			reebookSneakers: reebookProd,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: 'Server error',
			error: err.message,
		});
	}
};

//DESC: 'This method fetches erke products'
//URL: '/api/product/erke'
//REQUEST TYPE: GET request
exports.getErke = async (req, res) => {
	try {
		const erkeProd = await Product.find({
			$or: [{ brand: 'Erke' }, { brand: 'erke' }],
		}).limit(3);

		return res.status(200).json({
			success: true,
			message: 'Erke products fetched',
			count: erkeProd.length,
			erkeSneakers: erkeProd,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: 'Server error',
			error: err.message,
		});
	}
};
