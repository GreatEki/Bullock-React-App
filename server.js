const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const mongoose = require('mongoose');
const cors = require('cors');

//Initialize App
const app = express();

// Configure Global variables with dotenv
dotenv.config({ path: path.resolve(__dirname, './config/config.env') });

app.use(express.json());
app.use(cors());

//DataBase COnfig

// const db = require('./config/database').mongoURI;

//Connect to Database
const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('Database Connected Successfully.....');
	} catch (err) {
		console.log(`Database Connection failed; Error Encountered: ${err}`);
	}
};

dbConnection();

//Importing routes
app.use('/api/product', require('./routes/api/productRoutes'));
app.use('/api', require('./routes/api/nav-controllers'));
app.use('/api/users', require('./routes/api/user'));
app.use('/api/orders', require('./routes/orders'));
//Seeding products to our database
//Comment it out to prevent file function from running muitiple times to our database
//var productSeeder = require('./seeder/product-seeder');
//productSeeder;

const PORT = process.env.PORT || 4500;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
}

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
