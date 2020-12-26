import { combineReducers } from 'redux';
import errorReducer from './errorReducers';
import filmReducer from './filmReducers';
import watchReducer from './watchReducers';
import authenReducer from './authenReducer';

const reducer = combineReducers({ errorReducer, filmReducer, watchReducer, authenReducer });

export default reducer;
