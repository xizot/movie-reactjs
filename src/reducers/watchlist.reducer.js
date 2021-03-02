import {
    GET_WATCHLIST_REQUEST,
    GET_WATCHLIST_SUCCESS,
    GET_WATCHLIST_FAIL,
    ADD_WATCHLIST_REQUEST,
    ADD_WATCHLIST_SUCCESS,
    ADD_WATCHLIST_FAIL,
    DEL_WATCHLIST_REQUEST,
    DEL_WATCHLIST_SUCCESS,
    DEL_WATCHLIST_FAIL,
} from "../types/watchlist.type";

const initialState = {
    isLoading: false,
    data: "",
    isAdding:false,
    isDeleting:false,
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
        case ADD_WATCHLIST_REQUEST: {
            return {
                ...state,
                isAdding: true,
            };
        }
        case ADD_WATCHLIST_SUCCESS:
            return {
                ...state,
                isAddding: true,
            };
        case ADD_WATCHLIST_FAIL:
            return {
                ...state,
                isAddding: false,
            };
        case DEL_WATCHLIST_REQUEST: {
            return {
                ...state,
                isDeleting: true,
            };
        }
        case DEL_WATCHLIST_SUCCESS:
            return {
                ...state,
                isDeleting: true,
            };
        case DEL_WATCHLIST_FAIL:
            return {
                ...state,
                isDeleting: false,
            };
        default:
            return state;
    }
};

export default watchlistReducer;
