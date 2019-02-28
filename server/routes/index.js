const routes = require('express').Router();
const Events = require('./event');
const Teams = require('./team');
const Users = require('./user');

routes.use(Events);
routes.use(Users);
routes.use(Teams);

module.exports = routes;
