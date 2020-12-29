import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    VERIFY_SUCCESS,
    VERIFY_FAIL
} from "../types/authenType";

const initialState = {
    token: localStorage.getItem("token"),
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    user: null,
    register: false,
};

const authenReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                register: true,
            };

        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("refreshToken", action.payload.refreshToken);
            return {
                ...state,
                token: action.payload.token,
                refreshToken: action.payload.refreshToken,
                isAuthenticated: true,
                isLoading: false,
            };
        case LOGIN_FAIL:
        case VERIFY_FAIL:
        case VERIFY_SUCCESS:
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            return {
                token: null,
                refreshToken: null,
                isAuthenticated: false,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default authenReducer;
