/** MONGO CONFIGURATION**/

const logger = require('../utils/logger');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let options = {
	useNewUrlParser: true,
	reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
	reconnectInterval: 500, // Reconnect every 500ms
	poolSize: 10, // Maintain up to 10 socket connections
	// If not connected, return errors immediately rather than waiting for reconnect
	bufferMaxEntries: 0
};

/**
 * @description Starts the MongoDB database connection
 * @returns {String} Message indicating the connection was successful
 * @throws {Error} Returns error if database connection was unsuccessful
 */

const connectDB = () => {
	// If the environment is production start mongo with cloud database instance
	if (process.env.NODE_ENV === 'production') {
		mongoose
			.connect(process.env.CLOUD_DB_HOST, options)
			.then(() => {
				logger.info('Production database connected succesfully!');
			})
			.catch(err => {
				logger.debug('There was an error connecting to the DB', err);
			});
	}

	// If environment is DEV, then start mongo with local development database
	mongoose
		.connect('mongodb://127.0.0.1/autotrader-olympics', options)
		.then(() => {
			logger.info('Dev database connected successfully!');
		})
		.catch(err => {
			logger.debug('There was an error connecting to the DB', err);
		});
};

/**
 * @description Disconnects the MongoDB database connection
 * @returns {String} Message indicating the connection was successfully disconnected
 * @throws {Error} Returns error if database connection was unsuccessful
 */

const disconnectDB = () => {
	mongoose
		.disconnect()
		.then(() => {
			logger.info('Database disconnected successfully!');
		})
		.catch(err => {
			logger.debug('There was an error disconnecting to the DB', err);
		});
};

module.exports = { connectDB, disconnectDB };
