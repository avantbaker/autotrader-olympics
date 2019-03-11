
const express = require('express');
const passport = require('passport');

const authRouter = express.Router();

authRouter.route('/github/callback')
	.get(
		passport.authenticate(
			'github', 
			{
				successRedirect: '/auth/success',
				failure: '/auth/failure'
			}
		)
	);

authRouter.route('/github')
	.get(
		passport.authenticate('github')
	);

authRouter.route('/success')
	.get((req, res) => {
		res.redirect(301, 'http://localhost:3000/events')
		// res.send({ user })
	});

authRouter.route('/failure')
	.get(function(req, res) {
		res.redirect(301, 'http://localhost:3000/')
    });
    
module.exports = authRouter;