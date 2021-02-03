import { combineReducers } from "redux";
import errorReducer from "./error.reducer";
import filmReducer from "./film.reducer";
import watchReducer from "./watch.reducer";
import authenReducer from "./auth.reducer";
import forgotReducer from "./forgot.reducer";
import inforReducer from "./infor.reducer"
import searchReducer from "./search.reducer"
import movieReducer from "./movie.reducer"
// import inforReducer from "./infor";

const reducer = combineReducers({
    error: errorReducer,
    film: filmReducer,
    watch: watchReducer,
    auth: authenReducer,
    forgot: forgotReducer,
    infor: inforReducer,
    search: searchReducer,
    movie: movieReducer
});

export default reducer;
