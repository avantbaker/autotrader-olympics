const Event = require('../controllers/event');
const express = require('express');
const router = express.Router();

router
	.route('/event/eventId')
	.put(Event.updateEvent)
	.delete(Event.deleteEvent)
	.get(Event.getEvent);

router.post('/event', Event.createEvent);

module.exports = router;
