const express = require('express');
<<<<<<< HEAD
const path = require('path');
const dotenv = require('dotenv');
=======
>>>>>>> origin/master
const mongoose = require('mongoose');
const cors = require('cors');

//Initialize App
const app = express();

<<<<<<< HEAD
// Configure Global variables with dotenv
dotenv.config({ path: path.resolve(__dirname, './config/config.env') });

=======
>>>>>>> origin/master
app.use(express.json());
app.use(cors());

//DataBase COnfig
<<<<<<< HEAD
// const db = require('./config/database').mongoURI;
=======
const db = require('./config/database').mongoURI;
>>>>>>> origin/master

//Connect to Database
const dbConnection = async () => {
	try {
<<<<<<< HEAD
		await mongoose.connect(process.env.MONGO_URI, {
=======
		await mongoose.connect(db, {
>>>>>>> origin/master
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

const port = process.env.PORT || 8080;

<<<<<<< HEAD
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

=======
>>>>>>> origin/master
app.listen(port, () => console.log(`Server started on port: ${port}`));
