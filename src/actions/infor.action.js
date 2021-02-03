import { useAuthorization } from "../helper";
import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    GET_AVATAR_REQUEST,
    GET_AVATAR_FAIL,
    GET_AVATAR_SUCCESS,
    UPDATE_AVATAR_REQUEST,
    UPDATE_AVATAR_FAIL,
    UPDATE_AVATAR_SUCCESS,
    INFO_LOADING,
} from "../types/infor.type";
import axios from "./../axios";
import { clearError, getError } from "./error.action";

export const getAvatar = () => (dispatch, getState) => {
    const token = localStorage.getItem("token");

    dispatch({
        type: INFO_LOADING,
    });
    dispatch({
        type: GET_AVATAR_REQUEST,
    });
    if (token) {
        axios
            .get("/user/avatar", { headers: useAuthorization() })
            .then((res) => {
                dispatch({
                    type: GET_AVATAR_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                if (err) {
                    dispatch(
                        getError(err.response.data, err.response.status, GET_AVATAR_FAIL)
                    );
                    dispatch({
                        type: GET_AVATAR_FAIL,
                    });
                }
            });
    } else {
        dispatch({
            type: GET_AVATAR_FAIL,
        });
    }
};

export const upAvatar = (image) => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: UPDATE_AVATAR_REQUEST,
    });
    if (token) {
        axios
            .post("/user/avatar", image, { headers: useAuthorization() })
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: UPDATE_AVATAR_SUCCESS,
                    payload: res.data,
                });
                dispatch(clearError());
            })
            .catch((err) => {
                if (err.response) {
                    dispatch(
                        getError(
                            err.response.data.error || err.response.data.errors,
                            err.response.status,
                            UPDATE_AVATAR_FAIL
                        )
                    );
                }
                dispatch({
                    payload: {
                        msg: "Server error!!!",
                        status: 500,
                        id: UPDATE_AVATAR_FAIL,
                    },
                    type: UPDATE_AVATAR_FAIL,
                });
            });
    } else {
        dispatch({
            type: UPDATE_AVATAR_FAIL,
        });
    }
};

export const update = (
    username,
    displayName,
    email,
    currentPassword,
    confirmPassword,
    dateOfBirth,
    newPassword
) => (dispatch) => {
    const body = {
        username,
        displayName,
        email,
        currentPassword,
        confirmPassword,
        dateOfBirth,
        newPassword,
    };
    const token = localStorage.getItem("token");
    dispatch({
        type: UPDATE_USER_REQUEST,
    });
    if (token) {
        axios
            .put("/user/", body, { headers: useAuthorization() })
            .then((res) => {
                dispatch({
                    type: UPDATE_USER_SUCCESS,
                    payload: {
                        token: res.data.accessToken,
                        refreshToken: res.data.refreshToken,
                    },
                });

                dispatch(clearError());
            })
            .catch((err) => {
                if (err.response) {
                    dispatch(
                        getError(
                            err.response.data.error || err.response.data.errors,
                            err.response.status,
                            UPDATE_USER_FAIL
                        )
                    );
                }
                dispatch({
                    payload: {
                        msg: "Server error!!!",
                        status: 500,
                        id: UPDATE_USER_FAIL,
                    },
                    type: UPDATE_USER_FAIL,
                });
            });
    } else {
        dispatch({
            type: UPDATE_USER_FAIL,
        });
    }
};
