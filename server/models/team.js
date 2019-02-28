const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	members: [
		{
			type: String,
			required: true
		}
	],
	color: {
		type: String,
		required: true
	},
	imgSrc: {
		type: String,
		required: true
	}
});

const Team = mongoose.model('Team', TeamSchema);
module.exports = Team;
