import {
    FORGOT_SUCCESS,
    FORGOT_FAIL,
    SENDPASSWORD_SUCCESS,
    SENDPASSWORD_FAIL,
    FORGOT_REQUEST,
    FORGOT_RESET,
} from "../types/forgot.type";

const initialState = {
    isLoading: false,
    sendRecovery: false,
    sendPassword: false,
    code: localStorage.getItem("code"),
    resMessage: null,
    isSendFailed: null,
};
const forgotReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORGOT_REQUEST:
        case FORGOT_RESET:
            return {
                ...state,
                resMessage: null,
                isSendFailed: null,
            };
        case FORGOT_SUCCESS:
            return {
                ...state,
                sendRecovery: true,
                isLoading: false,
                resMessage: action.payload.message,
                isSendFailed: false,
            };
        case FORGOT_FAIL:
            return {
                ...state,
                sendRecovery: false,
                isLoading: false,
                resMessage: action.payload,
                isSendFailed: true,
            };
        case SENDPASSWORD_SUCCESS:
            return {
                ...state,
                sendPassword: false,
                isLoading: false,
            };
        case SENDPASSWORD_FAIL:
            return {
                ...state,
                sendPassword: false,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default forgotReducer;
