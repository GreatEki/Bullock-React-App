const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Initialize App
const app = express();

app.use(express.json());
app.use(cors());

//DataBase COnfig
const db = require('./config/database').mongoURI;

//Connect to Database
const dbConnection = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		console.log('Database Connected Successfully.....');
	} catch (err) {
		console.log(`Database Connection failed; Error Encountered: ${err}`);
	}
};

dbConnection();

//Importing routes
app.use('/api/product', require('./routes/api/product-controllers'));
app.use('/api', require('./routes/api/nav-controllers'));

//Seeding products to our database
//Comment it out to prevent file function from running muitiple times to our database
//var productSeeder = require('./seeder/product-seeder');
//productSeeder;

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port: ${port}`));
