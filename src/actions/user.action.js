import { history } from "../helper";
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT_SUCCESS,
    VERIFY_SUCCESS,
    VERIFY_FAIL,
} from "../types/auth.type";
import axios from "./../axios";
import { clearError, getError } from "./error.action";

//login
export const login = (username, password) => (dispatch) => {
    axios
        .post("/auth/login/", { username, password })
        .then((res) => {
            history.push("/");
           
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token: res.data.accessToken,
                    refreshToken: res.data.refreshToken,
                },
            });
            dispatch(clearError())
        })
        .catch((err) => {
            if (err.response) {
                dispatch(
                    getError(err.response.data.error || err.response.data.errors, err.response.status, LOGIN_FAIL)
                );
            }
            dispatch({
                payload:{msg:"Server error!!!", status:500,id: LOGIN_FAIL},
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
    dateOfBirth
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
            alert("success, please check your mail box");
        })
        .catch((err) => {
            if (err.response) {
                dispatch(
                    getError(
                        err.response.data,
                        err.response.status,
                        REGISTER_FAIL
                    )
                );
                let errList = err.response.data.errors
                    .map((i) => i["msg"])
                    .join("\n");
                console.log('errList: ', errList);
            }
            dispatch({
                type: REGISTER_FAIL,
            });
        });
};

//verify Email
export const verifyEmail = (activationCode) => (dispatch) => {
    axios
        .post("/auth/confirmemail/", { activationCode })
        .then((res) => {
            dispatch({
                type: VERIFY_SUCCESS,
                payload: res.data,
            });
            alert("Email confirmed!");
        })
        .catch((err) => {
            if (err.response) {
                dispatch(
                    getError(
                        err.response.data,
                        err.response.status,
                        VERIFY_FAIL
                    )
                );

                alert("Failed to confirm email!");
            }
            dispatch({
                type: VERIFY_FAIL,
            });
        });
};

// token
export const loadUser = () => (dispatch, getState) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: USER_LOADING,
    });
    if (token) {
        axios
            .get("/user")
            .then((res) => {
                dispatch({
                    type: USER_LOADED,
                    payload: res.data,
                });
            })
            .catch((err) => {
                if(err){
                    dispatch(
                        getError(err.response.data, err.response.status, AUTH_ERROR)
                    );
                    dispatch({
                        type: AUTH_ERROR,
                    });
                }
            });
    } else {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};

//logout
export const logout = () => ({
    type: LOGOUT_SUCCESS,
});
