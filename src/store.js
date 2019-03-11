import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import teamsDuck from './redux/teamsDuck';
import eventsDuck from './redux/eventsDuck';

const rootReducer = combineReducers({
	[eventsDuck.store]: eventsDuck.reducer,
	[teamsDuck.store]: teamsDuck.reducer,
});

const composeEnhancers = composeWithDevTools({
  name: 'at-olympics',
});


const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;
