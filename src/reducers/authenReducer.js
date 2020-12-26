import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types/authenType";

const initialState = {
    token: null,
    refreshToken: null,
}

const authenReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("refreshToken", action.payload.refreshToken)
            return {
                ...state,
                token: action.payload.token,
                refreshToken: action.payload.refreshToken,
            }
        case LOGIN_FAIL:
            localStorage.setItem("token", null)
            localStorage.setItem("refreshToken", null)
            return {
                token: null,
                refreshToken: null,
            }

        default:
            return state;
    }
}

export default authenReducer