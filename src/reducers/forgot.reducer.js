import {
    FORGOT_SUCCESS,
    FORGOT_FAIL,
    SENDPASSWORD_SUCCESS,
    SENDPASSWORD_FAIL,
} from "../types/forgot.type";

const initialState = {
    isLoading: false,
    sendRecovery: false,
    sendPassword:false,
    code: localStorage.getItem("code"),
};
const forgotReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORGOT_SUCCESS:
            return {
                ...state,
                sendRecovery:true,
                isLoading: false,
            };
        case FORGOT_FAIL:
            return {
                ...state,
                sendRecovery:false,
                isLoading: false,
            };
        case SENDPASSWORD_SUCCESS:
            return {
                ...state,
                sendPassword:false,
                isLoading: false,
            }; 
        case SENDPASSWORD_FAIL:
            return {
                ...state,
                sendPassword:false,
                isLoading: false,
            };             
        default:
            return state;
    }
};

export default forgotReducer;