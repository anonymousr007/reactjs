import { combineReducers } from 'redux-immutable';
import { reducer as testReducer } from '../pages/test/store';
import { reducer as homeReducer } from '../pages/home/store';

const reducer = combineReducers({
	test: testReducer,
	home: homeReducer
});

export default reducer;
