const Team = require('../models/team');
const logger = require('../utils/logger');

module.exports = {
	getTeam: (req, res, next) => {
		Team.findOne({
			_id: req.params.teamId
		})
			.then(team => {
				return res.status(200).json(team);
			})
			.catch(err => {
				return next(err);
			});
	},

	createTeam: (req, res, next) => {
		let team = new Team({
			name: req.sanitize(req.body.name),
			imgSrc: req.sanitize(req.body.imgSrc),
			time: req.sanitize(req.body.time),
			place: req.sanitize(req.body.place),
			registrees: req.body.registrees
		});

		team
			.save()
			.then(newTeam => {
				logger.info('New team saved successfully!');
				return res.status(200).json(newTeam);
			})
			.catch(err => {
				return next(err);
			});
	},

	updateTeam: (req, res, next) => {
		Team.findOneAndUpdate(
			{
				_id: req.params.teamId
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
			.then(team => {
				logger.info('Team updated successfully!');
				return res.status(200).json(team);
			})
			.catch(err => {
				return next(err);
			});
	},

	deleteTeam: (req, res, next) => {
		Team.findOneAndDelete({
			_id: req.params.teamId
		})
			.then(() => {
				logger.info('Team deleted successfully!');
				return res.status(200).json('team was deleted succesfully');
			})
			.catch(err => {
				return next(err);
			});
	}
};
