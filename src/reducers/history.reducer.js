import {
    GET_HISTORY_REQUEST,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAIL,
} from "../types/history.type";

const initialState = {
    isLoading: false,
    data: "",
};
const inforReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HISTORY_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_HISTORY_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case GET_HISTORY_FAIL:
            return {
                ...state,
                isLoading: false,
            };
 
        default:
            return state;
    }
};

export default inforReducer;
