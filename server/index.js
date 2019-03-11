const express = require('express');
const _get = require('lodash.get');
const _set = require('lodash.set');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const fs = require('fs-extra');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getState = () => fs.readJsonSync(path.join(__dirname, 'state.json'));
const setState = state => fs.writeJsonSync(path.join(__dirname, 'state.json'), state, { spaces: 4 });

// set team data
app.post('/api/team', (req, res) => {
	const state = getState();
	const team = req.body;
	const data = _set(state, ['teams', team.id], team);
	
	setState(data);
	res.json(team);
});


// Get all teams
app.get('/api/teams', (req, res) => {
	const data = _get(getState(), 'teams', {});
	res.send(data);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));