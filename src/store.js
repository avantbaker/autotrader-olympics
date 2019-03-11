import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import teamsDuck from './redux/teamsDuck';

const rootReducer = combineReducers({
	[teamsDuck.store]: teamsDuck.reducer,
});

const composeEnhancers = composeWithDevTools({
  name: 'at-olympics',
});


const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;
