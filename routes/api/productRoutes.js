var express = require('express');
const router = express.Router();
const {
	searchByChoice,
	getProductById,
	getNike,
	getAddidas,
	getReebook,
	getErke,
	getWristWatches,
	getWallets,
	getShoes,
} = require('../../controllers/products');

router.route('/nike').get(getNike);

router.route('/addidas').get(getAddidas);

router.route('/reebook').get(getReebook);

router.route('/erke').get(getErke);

router.route('/watch').get(getWristWatches);

router.route('/wallets').get(getWallets);

router.route('/shoes').get(getShoes);

router.route('/:id').get(getProductById);

router.route('/search/:value').get(searchByChoice);

module.exports = router;
