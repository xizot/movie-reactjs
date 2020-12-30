import { combineReducers } from "redux";
import errorReducer from "./error";
import filmReducer from "./film";
import watchReducer from "./watch";
import authenReducer from "./auth";

const reducer = combineReducers({
    error: errorReducer,
    film: filmReducer,
    watch: watchReducer,
    auth: authenReducer,
});

export default reducer;
