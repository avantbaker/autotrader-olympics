import Duck from 'extensible-duck';
import createAction from './createAction';
import fetch from 'isomorphic-fetch';
import _get from 'lodash.get';

export default new Duck({
    namespace: 'app',
    store: 'events',
    types: [
        'UPDATE_EVENT',
        'DELETE_EVENT',
        'UPDATE_EVENTS',
    ],
    initialState: {
        basketball: {},
        typing: {},
        jump: {},
        airplane: {},
        skeleton: {},
        biathalon: {},
        balloon: {},
        curling: {},
    },
    reducer: (state, action, duck) => {
        switch(action.type) {

            case duck.types.UPDATE_EVENT: {

                return {
                    ...state,
                    [action.payload.id]: action.payload,
                };
            }

            case duck.types.UPDATE_EVENTS: {
                return action.payload;
            }

            default: return state
        }
    },
    selectors: {
        root: state => state,
        getEvents: new Duck.Selector(selectors => state => {
            const events = _get(state, 'events', {});

            return Object.keys(events).reduce((acc, key) => {

                const event = {
                    id: key,
                    ...events[key],
                };

                const teams = _get(state, 'teams', {});

                event.participants = Object.keys(teams).reduce((acc, teamKey) => {
                    const team = _get(state, ['teams', teamKey]);
                    acc[team.name] = _get(team, ['events', key])
                    return acc;
                }, {});

                acc[key] = event;

                return acc;
            }, {});


        }),

        getSelectedNames: new Duck.Selector(selectors => state => {
            return selectors.getEvents(state).map(event => event.name);
        }),

    },
    creators: (duck) => {
        const creators = {
            loadEvents: () => {
                return async (dispatch, getState) => {
                    const response = await fetch('/api/events');
                    const data = await response.json();
                    dispatch({
                        type: duck.types.UPDATE_EVENTS,
                        payload: data
                    });
                };
            },
        };

        return creators;
    },
})