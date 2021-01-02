import {
    FORGOT_SUCCESS,
    FORGOT_FAIL,
} from "../types/forgot.type";

const initialState = {
    isLoading: false,
    code: localStorage.getItem("code"),
};
const forgotReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORGOT_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case FORGOT_FAIL:
            return {
                isLoading: false,
            };            
        default:
            return state;
    }
};

export default forgotReducer;