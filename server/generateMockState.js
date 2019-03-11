const faker = require('faker');
const fs = require('fs-extra');


const countries = [
    'China',
    'Australia',
    'Germany',
    'Russia',
    'India ',
    'Norway',
    'Spain',
    'Canada',
    'Switzerland',
    'South Africa',
    'Venezuela',
    'Mexico',
    'Colombia',
    'France',
    'UK',
    'Brazil',
    'Argentina',
    'Egypt',
    'Kenya',
    'Greece',
    'Italy',
    'Nigeria',
    'Jamaica',
];

const teams = Array.from({ length: 6 }).reduce((acc, team, index) => ({
	...acc,
	[index]: {
        id: index,
		name: countries[index],
		contact: faker.fake('{{name.firstName}} {{name.lastName}}'),
		email: faker.internet.email(),
		events: {
            basketball: [faker.fake('{{name.firstName}} {{name.lastName}}')],
            typing: [faker.fake('{{name.firstName}} {{name.lastName}}')],
            jump: [faker.fake('{{name.firstName}} {{name.lastName}}')],
            airplane: [faker.fake('{{name.firstName}} {{name.lastName}}')],
            skeleton: [faker.fake('{{name.firstName}} {{name.lastName}}')],
            biathalon: [faker.fake('{{name.firstName}} {{name.lastName}}')],
            balloon: [faker.fake('{{name.firstName}} {{name.lastName}}')],
            curling: [faker.fake('{{name.firstName}} {{name.lastName}}')],
        }
	}
}));

fs.writeJson('./server/state.json', {
	teams: teams,
}, { spaces: 4});

console.log('saved mock state to ./server/state.json');
