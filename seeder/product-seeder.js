let mongoose = require('mongoose');
let Product = require('../models/product');

//Bring in our connection string
let db = require('../config/database').mongoURI;

//Connect to database
const Conn = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log(`Connection to seed products to database successful`);
	} catch (err) {
		console.log(`Error occurred: Connection Failed!`);
	}
};

Conn();

//Products to seed to database
let productList = [
	new Product({
		imagePath: 'addidas-allstar.jpg',
		title: 'Addidas-All-Star',
		price: 17000,
		category: 'sneakers',
		brand: 'Addidas'
	}),

	new Product({
		imagePath: 'addidas-black-allstar.jpg',
		title: 'Addidas-All Star-Black',
		price: 16000,
		category: 'Addidas'
	}),
	new Product({
		imagePath: 'black-airforce-one.jpg',
		title: 'Black-Airforce-One',
		price: 25000,
		category: 'sneakers',
		brand: 'Nike'
	}),

	new Product({
		imagePath: 'erke-boost.jpg',
		title: 'Erke-Boost-Sneaker',
		price: 15000,
		category: 'sneakers',
		brand: 'Erke'
	}),

	new Product({
		imagePath: 'erke-stars.jpg',
		title: 'White-Erke-Stars',
		price: 12000,
		category: 'sneakers',
		brand: 'Erke'
	}),

	new Product({
		imagePath: 'addidas-joggers.jpg',
		title: 'Addidas-Joggers',
		price: 12000,
		category: 'sneakers',
		brand: 'Addidas'
	}),

	new Product({
		imagePath: 'all-nighter-watch.jpg',
		title: 'All-Nighter-Wrist-Watch',
		price: 11000,
		category: 'watch',
		brand: 'unknown'
	}),

	new Product({
		imagePath: 'bison-denim-wallet.jpg',
		title: 'Wallet Bison Denim ',
		price: 6000,
		category: 'wallets',
		brand: 'Bison-Denim'
	}),

	new Product({
		imagePath: 'black-unisex-stainless.jpg',
		title: 'Unisex wrist watch',
		price: 4000,
		category: 'watch',
		brand: 'unknown'
	}),

	new Product({
		imagePath: 'black-wristband-watch.jpg',
		title: 'Black-Wrist',
		price: 16000,
		category: 'watch',
		brand: 'unknown'
	}),

	new Product({
		imagePath: 'blue-chain.jpg',
		title: 'Blue-Chain-Watch',
		price: 15000,
		category: 'watch',
		brand: 'quartz'
	}),

	new Product({
		imagePath: 'bounabay-smart-watch.jpg',
		title: 'Bounabay-smart-watch',
		price: 10000,
		category: 'watch',
		brand: 'Bounabay'
	}),

	new Product({
		imagePath: 'brown-oxford-shoe.jpg',
		title: 'Brown-oxford-shoe-for-men',
		price: 15000,
		category: 'shoe',
		brand: 'oxford'
	}),

	new Product({
		imagePath: 'addidas-v2-boost.jpg',
		title: 'Addidas-yeezy-v2-sneaker',
		price: 25000,
		category: 'sneakers',
		brand: 'addidas'
	}),

	new Product({
		imagePath: 'erke-net.jpg',
		title: 'White-erke-canvas',
		price: 7000,
		category: 'sneakers',
		brand: 'Erke'
	}),

	new Product({
		imagePath: 'hasp-small-wallet.jpg',
		title: 'Hasp-leather-wallet',
		price: 4000,
		category: 'wallet',
		brand: 'hasp'
	}),

	new Product({
		imagePath: 'laorentou-wallet.jpg',
		title: 'Laorentou-Wallet',
		price: 8000,
		category: 'wallet',
		brand: 'Laorentou'
	}),

	new Product({
		imagePath: 'kristian-egelund-t1sTHYjSN10-unsplash.jpg',
		title: 'Nike-unisex-sneaker',
		price: 18000,
		category: 'sneakers',
		brand: 'Nike'
	}),

	new Product({
		imagePath: 'mens-fashion-watch.jpg',
		title: 'Mens-fashion-wristwatch',
		price: 10000,
		category: 'watch',
		brand: 'lige'
	}),

	new Product({
		imagePath: 'mens-formal-shoe-3.jpg',
		title: 'Black-office-shoe-formal-men',
		price: 24000,
		category: 'shoe',
		brand: 'italian'
	}),

	new Product({
		imagePath: 'mens-grimettrin-italian.jpg',
		title: 'Mens-grimettrin-shoe-black',
		price: 24000,
		category: 'shoe',
		brand: 'Grimmettrin'
	}),

	new Product({
		imagePath: 'mens-leather-2.jpg',
		title: 'Brown-leather-shoe-for-men',
		price: 15000,
		category: 'shoe',
		brand: 'unknown'
	}),

	new Product({
		imagePath: 'mens-luxury-watch.jpg',
		title: 'unisex-luxury-watch',
		price: 10000,
		category: 'watch',
		brand: 'unknown'
	}),

	new Product({
		imagePath: 'mens-sweet-loafers.jpg',
		title: 'Mens-loafers-brown',
		price: 12000,
		category: 'shoe',
		brand: 'italian'
	}),

	new Product({
		imagePath: 'mens-thombs-brown.jpg',
		title: 'Thombs-brown-for-men',
		price: 25000,
		category: 'shoe',
		brand: 'italian'
	}),

	new Product({
		imagePath: 'movado-bold.jpg',
		title: 'Movado-Bold-Brown-watch',
		price: 9000,
		category: 'watch',
		brand: 'Movado'
	}),

	new Product({
		imagePath: 'nike-1.jpg',
		title: 'Nike-Sneakers',
		price: 27000,
		category: 'sneakers',
		brand: 'Nike'
	}),

	new Product({
		imagePath: 'nike-airmax-white-black.jpg',
		title: 'Black-White-Nike-Airmax',
		price: 22000,
		category: 'sneakers',
		brand: 'Nike'
	}),

	new Product({
		imagePath: 'nikeairmaxwomen.jpg',
		title: 'Womens-Nike-Airmax',
		price: 20000,
		category: 'sneakers',
		brand: 'Nike'
	}),

	new Product({
		imagePath: 'nike-boost.jpg',
		title: 'Grey-Nike-Sneaker-unisex',
		price: 18000,
		category: 'sneakers',
		brand: 'Nike'
	}),

	new Product({
		imagePath: 'reebook-classic-white-black.jpg',
		title: 'Reebook-classic-sneakers',
		price: 15000,
		category: 'sneakers',
		brand: 'Reebook'
	}),

	new Product({
		imagePath: 'reebook-speed-flexweave.jpg',
		title: 'Reebook-flexweave-sneakers',
		price: 25000,
		category: 'sneakers',
		brand: 'Reebook'
	})
];

var done = 0;
for (var i = 0; i < productList.length; i++) {
	productList[i].save(err => {
		done++;
		if (done === productList.length) {
			exit();
		}
		console.log(err);
	});
}

const exit = () => {
	mongoose.disconnect();
};
