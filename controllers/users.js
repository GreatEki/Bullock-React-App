const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtKey = require('../config/database').jwtKey;

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
				message: 'Authentication failed',
			});
		} else {
			//Create new user and Hash password
			const newUser = new User({
				firstname,
				lastname,
				email,
				password,
			});

			const hash = await bcrypt.hash(password, 10);

			newUser.password = hash;
			//console.log(newUser.password);

			const savedUser = await newUser.save();

			return res.status(201).json({
				success: true,
				message: 'New User Created Successfully',
				user: savedUser,
			});
		}
	} catch (err) {
		return res.status(500).json({
			error: err.message,
		});
	}
};

//REQUEST TYPE: GET
//URL: '/api/users/signun
//DESC' authenticates user anf signs user into profile page accounts
exports.signin = async (req, res) => {
	try {
		const { email, password } = req.body;

		//Convert email to Lowercase
		email.toLowerCase();

		//Check if email is valid
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'Authentication Failed',
			});
		} else {
			//Validate Password
			const valid = await bcrypt.compare(password, user.password);

			if (!valid) {
				return res.status(404).json({
					success: false,
					message: 'Authentication Failed',
				});
			} else {
				//Generate token
				//the  jwt.sgin() method, takes in three argument
				//jwt.sign(payload, secretOrPrivateKey, [option, callback])

				const token = await jwt.sign(
					{ email: user.email, userId: user._id },
					jwtKey,
					{ expiresIn: '1h' }
				);
				return res.status(201).json({
					success: true,
					message: 'Authentication Successful',
					user,
					token,
				});
			}
		}
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err.message,
		});
	}
};
