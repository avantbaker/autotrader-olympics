const User = require('../models/user');
const logger = require('../utils/logger');

module.exports = {
	getUser: (req, res, next) => {
		User.findOne({
			_id: req.params.userId
		})
			.then(user => {
				return res.status(200).json(user);
			})
			.catch(err => {
				return next(err);
			});
	},

	createUser: (req, res, next) => {
		let user = new User({
			firstName: req.sanitize(req.body.firstName),
			lastName: req.sanitize(req.body.lastName),
			email: req.sanitize(req.body.email),
			registeredEvt: req.sanitize(req.body.registeredEvt)
		});

		user
			.save()
			.then(newUser => {
				logger.info('New user saved successfully!');
				return res.status(200).json(newUser);
			})
			.catch(err => {
				return next(err);
			});
	},

	updateUser: (req, res, next) => {
		User.findOneAndUpdate(
			{
				_id: req.params.userId
			},
			{
				$set: {
					firstName: req.sanitize(req.body.firstName),
					lastName: req.sanitize(req.body.lastName),
					email: req.sanitize(req.body.email),
					registeredEvt: req.sanitize(req.body.registeredEvt)
				}
			}
		)
			.then(user => {
				logger.info('User updated successfully!');
				return res.status(200).json(user);
			})
			.catch(err => {
				return next(err);
			});
	},

	deleteUser: (req, res, next) => {
		User.findOneAndDelete({
			_id: req.params.userId
		})
			.then(() => {
				logger.info('User deleted successfully!');
				return res.status(200).json('User was deleted succesfully');
			})
			.catch(err => {
				return next(err);
			});
	}
};
