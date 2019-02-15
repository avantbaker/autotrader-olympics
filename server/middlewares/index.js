const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const sanitizer = require('express-sanitizer');
const routes = require('../routes/index');
const { serverError, databaseError } = require('../middlewares/errors');
const logger = require('../utils/logger');

/**
 * @description Applies all middleware for the entire application
 * @param {Object} Express app instance
 */

const applyMiddleware = app => {
	// Enable CORS for all requests
	app.use(cors());

	// Sets various secure HTTP Headers for security
	// TODO: Add Content Security Policy
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

	// API routes
	app.use(routes);

	// Database Validation Error Handler
	app.use(databaseError);

	// Internal Server Error Handler
	app.use(serverError);
};

module.exports = applyMiddleware;
