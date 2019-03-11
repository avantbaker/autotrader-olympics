const logger = require('../utils/logger');

module.exports = {
  /**
   * @description Error handler for Mongoose/MongoDB Validation
   * @param {Error}  Error object
   * @param {Request }  Request object
   * @param {Response}  Response object
   * @param {Next}  Next Middleware function
   * @returns {Error} returns error when request body has an Mongoose validation error
   */

  databaseError: (err, req, res, next) => {
    if (err.name == 'ValidationError') {
      logger.error('There was a validation error', err);
      return res.status(400).json(err);
    }
    return next(err);
  },

  /**
   * @description Error handler for generic server related errors
   * @param {Error}  Error object
   * @param {Request }  Request object
   * @param {Response}  Response object
   * @param {Next}  Next Middleware function
   * @returns {Error} returns error when the server has an error
   */

  serverError: (err, req, res, next) => {
    if (err) {
      err = new Error(
        'There is an internal server error that has occured. Please contact the site administrator.'
      );
      logger.error('There was a server error', err);
      return res.status(500).json(err);
    }
    return next(err);
  }
};
