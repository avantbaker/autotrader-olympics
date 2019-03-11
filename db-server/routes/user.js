const User = require('../controllers/user');
const express = require('express');
const router = express.Router();

router
	.route('/users/userId')
	.put(User.updateUser)
	.delete(User.deleteUser)
	.get(User.getUser);

router.post('/users', User.createUser);

module.exports = router;
