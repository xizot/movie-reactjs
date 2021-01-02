import { combineReducers } from "redux";
import errorReducer from "./error";
import filmReducer from "./film";
import watchReducer from "./watch";
import authenReducer from "./auth";
import forgotReducer from "./forgot";

const reducer = combineReducers({
    error: errorReducer,
    film: filmReducer,
    watch: watchReducer,
    auth: authenReducer,
    forgot:forgotReducer,
});

export default reducer;
