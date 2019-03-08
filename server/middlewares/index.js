const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const sanitizer = require('express-sanitizer');
const session = require('express-session');
const routes = require('../routes/index');
const { serverError, databaseError } = require('../middlewares/errors');
const logger = require('../utils/logger');
const passport = require('passport');
const authRouter = require('../routes/auth');
const GitHubStrategy = require('passport-github2').Strategy;


/**
 * @description Applies all middleware for the entire application
 * @param {Object} Express app instance
 */


const applyMiddleware = app => {

	passport.use(new GitHubStrategy(
		{
			clientID: '06db12a93013216123e6',
			clientSecret: '26eac1f68431b6d5fa9df2948493284815f079fb',
			callbackURL: "http://localhost:8000/auth/github/callback"
		},
		function(accessToken, refreshToken, profile, done) {
			console.log(profile);
			done(null, profile);
		})
	);

	// Enable CORS for all requests
	app.use(cors());
	// Sets various secure HTTP Headers for security
	app.use(helmet());

	// HTTP request logger
	app.use(morgan('common', { stream: logger.stream }));

	// Parses incoming requests with JSON payloads
	app.use(express.json({ limit: '100mb' }));
	app.use(express.urlencoded({ extended: false }));

	// Adds req.sanitize to the request body. Sanitizes the html inputs to prevent XSS attack
	app.use(sanitizer());

	// Compresses HTTP responses
	app.use(compression());

	app.use(session({ secret: 'anything' }))
	
	app.use(passport.initialize());
	app.use(passport.session());
	
	passport.serializeUser(function(user, done) {
		done(null, user)
	});

	passport.deserializeUser(function(user, done) {
		done(null, user)
	});

	app.use('/auth', authRouter);

	// API routes
	app.use(routes);

	app.get('*', (req, res, next) =>
		res.status(200).send({
			message: 'Welcome to the beginning of nothingness.'
		})
	);

	// Database Validation Error Handler
	app.use(databaseError);

	// Internal Server Error Handler
	app.use(serverError);
};

module.exports = applyMiddleware;
