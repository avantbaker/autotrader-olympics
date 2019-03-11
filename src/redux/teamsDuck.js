import Duck from 'extensible-duck';
import createAction from './createAction';
import fetch from 'isomorphic-fetch';
import _get from 'lodash.get';

export default new Duck({
    namespace: 'app',
    store: 'teams',
    types: [
        'UPDATE_TEAM',
        'DELETE_TEAM',
        'UPDATE_TEAMS',
    ],
    initialState: {},
    reducer: (state, action, duck) => {
        switch(action.type) {

            case duck.types.UPDATE_TEAM: {

                return {
                    ...state,
                    [action.payload.id]: action.payload,
                };
            }

            case duck.types.UPDATE_TEAMS: {
                return action.payload;
            }

            default: return state
        }
    },
    selectors: {
        root: state => state,
        getTeams: new Duck.Selector(selectors => state => {
            const teams = _get(state, 'teams', {});

            return Object.keys(teams).map(id => {

                const team = {
                    id,
                    ...teams[id],
                };

                const filledSlots = Object.keys(team.events).reduce((acc, key) => {
                    const event = _get(team, ['events', key], []);
                    const filledSlots = event.filter(participant => participant !== null || participant !== '');
                    return acc + filledSlots.length;
                }, 0);

                team.openSlots = 14 - filledSlots;

                return team;
            });

        }),

        getSelectedNames: new Duck.Selector(selectors => state => {
            return selectors.getTeams(state).map(team => team.name);
        }),

    },
    creators: (duck) => {
        const creators = {
            createTeam: (data) => {
                return async (dispatch, getState) => {
                    dispatch(creators.saveTeam({
                        id: new Date().getTime(),
                        ...data,
                    }));
                }
            },
            loadTeams: () => {
                return async (dispatch, getState) => {
                    const response = await fetch('/api/teams');
                    const data = await response.json();
                    dispatch(duck.creators.updateTeams(data));
                };
            },
            saveTeam: (team) => {
                return async (dispatch, getState) => {
                    dispatch({
                        type: duck.types.UPDATE_TEAM,
                        payload: team,
                    });

                    await fetch('/api/team', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(team)
                    });
                };
            },
            updateTeams: createAction(duck.types.UPDATE_TEAMS),
            updateTeam: (data) => {
                return async (dispatch, getState) => {
                    dispatch(creators.saveTeam(data));
                }
            },
        };

        return creators;
    },
})