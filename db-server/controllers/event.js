const Event = require('../models/event');
const logger = require('../utils/logger');

module.exports = {
	getEvent: (req, res, next) => {
		Event.findOne({
			_id: req.params.eventId
		})
			.then(event => {
				return res.status(200).json(event);
			})
			.catch(err => {
				return next(err);
			});
	},

	createEvent: (req, res, next) => {
		let event = new Event({
			name: req.sanitize(req.body.name),
			imgSrc: req.sanitize(req.body.imgSrc),
			time: req.sanitize(req.body.time),
			place: req.sanitize(req.body.place),
			registrees: req.body.registrees
		});

		event
			.save()
			.then(newEvent => {
				logger.info('New Event saved successfully!');
				return res.status(200).json(newEvent);
			})
			.catch(err => {
				return next(err);
			});
	},

	updateEvent: (req, res, next) => {
		Event.findOneAndUpdate(
			{
				_id: req.params.eventId
			},
			{
				$set: {
					name: req.sanitize(req.body.name),
					imgSrc: req.sanitize(req.body.imgSrc),
					time: req.sanitize(req.body.time),
					place: req.sanitize(req.body.place),
					registrees: req.body.registrees
				}
			}
		)
			.then(event => {
				logger.info('Event updated successfully!');
				return res.status(200).json(event);
			})
			.catch(err => {
				return next(err);
			});
	},

	deleteEvent: (req, res, next) => {
		Event.findOneAndDelete({
			_id: req.params.eventId
		})
			.then(() => {
				logger.info('Event deleted successfully!');
				return res.status(200).json('Event was deleted succesfully');
			})
			.catch(err => {
				return next(err);
			});
	}
};
