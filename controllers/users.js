const User = require('../models/user');
const bcrypt = require('bcrypt');

//REQUEST TYPE: POST
//URL: '/api/users/signup'
//DESC: 'Registers a new User'
exports.signup = async (req, res) => {
	try {
		const { firstname, lastname, email, password } = req.body;

		//Check if email exists
		const user = await User.find({ email });

		if (user.length > 0) {
			return res.status(409).json({
				success: false,
				message: 'Authentication failed'
			});
		} else {
			//Create new user and Hash password
			const newUser = new User({
				firstname,
				lastname,
				email,
				password
			});

			const hash = await bcrypt.hash(password, 10);

			newUser.password = hash;
			//console.log(newUser.password);

			const savedUser = await newUser.save();

			return res.status(201).json({
				success: true,
				message: 'New User Created Successfully',
				user: savedUser
			});
		}
	} catch (err) {
		return res.status(500).json({
			error: err.message
		});
	}
};
