import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT_SUCCESS,
} from "../types/authenType";
import axios from "./../axios";
import { getError } from "./errorActions";

//login
export const login = (username, password) => (dispatch) => {
    axios
        .post("/auth/login/", { username, password })
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token: res.data.accessToken,
                    refreshToken: res.data.refreshToken,
                },
            });
        })
        .catch((err) => {
            if (err.response) {
                dispatch(
                    getError(err.response.data, err.response.status, LOGIN_FAIL)
                );
            }
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};
//register
export const register = (
    username,
    displayName,
    email,
    password,
    confirmPassword,
    dateOfBirth,
) => (dispatch) => {

    const body = {
        username,
        displayName,
        email,
        password,
        confirmPassword,
        dateOfBirth,
    };
    axios
        .post("/auth/register/", body)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
            alert("success, please check your mail box")
        })
        .catch((err) => {
            if (err.response) {
                dispatch(
                    getError(err.response.data, err.response.status, REGISTER_FAIL)
                );
            }
            dispatch({
                type: REGISTER_FAIL,
            });
            let errList = err.response.data.errors.map(i => i['msg']).join('\n')
            alert(errList)
        });
};

// token
export const loadUser = () => (dispatch, getState) => {
    const token = getState().auth.token;
    dispatch({
        type: USER_LOADING,
    });

    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };
    if (token) {
        config.headers["Authorization"] = "Bearer " + token;
        axios
            .get("/user", config)
            .then((res) => {
                dispatch({
                    type: USER_LOADED,
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch(
                    getError(err.response.data, err.response.status, AUTH_ERROR)
                );
                dispatch({
                    type: AUTH_ERROR,
                });
            });
    }
};

//logout
export const logout = () => ({
    type: LOGOUT_SUCCESS,
});
