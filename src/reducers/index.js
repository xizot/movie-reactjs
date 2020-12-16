import { combineReducers } from 'redux';
import errorReducer from './errorReducers';
import filmReducer from './filmReducers';
import watchReducer from './watchReducers';

const reducer = combineReducers({ errorReducer, filmReducer, watchReducer });

export default reducer;
