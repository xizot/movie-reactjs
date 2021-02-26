import {
    GET_WATCHLIST_REQUEST,
    GET_WATCHLIST_SUCCESS,
    GET_WATCHLIST_FAIL,
} from "../types/watchlist.type";

const initialState = {
    isLoading: false,
    data: "",
};
const watchlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WATCHLIST_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_WATCHLIST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case GET_WATCHLIST_FAIL:
            return {
                ...state,
                isLoading: false,
            };
 
        default:
            return state;
    }
};

export default watchlistReducer;
