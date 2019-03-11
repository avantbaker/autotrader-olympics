const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	imgSrc: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	place: {
		type: String,
		required: true
	},
	registrees: [
		{
			type: String,
			required: true
		}
	]
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;
