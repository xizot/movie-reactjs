import { combineReducers } from "redux";
import errorReducer from "./error";
import filmReducer from "./film";
import watchReducer from "./watch";
import authenReducer from "./auth";
import forgotReducer from "./forgot";
// import inforReducer from "./infor";

const reducer = combineReducers({
    error: errorReducer,
    film: filmReducer,
    watch: watchReducer,
    auth: authenReducer,
    forgot:forgotReducer,
});

export default reducer;
