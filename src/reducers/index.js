import { combineReducers } from "redux";
import errorReducer from "./errorReducers";
import filmReducer from "./filmReducers";


const reducer = combineReducers({errorReducer, filmReducer})

export default reducer