import { history, useAuthorization } from "../helper";
import {
    FORGOT_SUCCESS,
    FORGOT_FAIL,
    SENDPASSWORD_SUCCESS,
    SENDPASSWORD_FAIL,
} from "../types/forgot.type";
import axios from "./../axios";
import { clearError, getError } from "./error.action";

export const recoveryEmail = (email) => (dispatch) => {
    axios
        .post(
            "/auth/sendrecoveryemail/",
            { email },
            { headers: useAuthorization() }
        )
        .then((res) => {
            dispatch({
                type: FORGOT_SUCCESS,
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
                        FORGOT_FAIL
                    )
                );
            }
            dispatch({
                payload: {
                    msg: "Server error!!!",
                    status: 500,
                    id: FORGOT_FAIL,
                },
                type: FORGOT_FAIL,
            });
        });
};
export const forgotPassword = (recoveryCode, password, confirmPassword) => (
    dispatch
) => {
    const body = {
        recoveryCode,
        password,
        confirmPassword,
    };
    axios
        .post("/auth/resetpassword/", body, { headers: useAuthorization() })
        .then((res) => {
            dispatch({
                type: SENDPASSWORD_SUCCESS,
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
                        SENDPASSWORD_FAIL
                    )
                );
            }
            dispatch({
                payload: {
                    msg: "Server error!!!",
                    status: 500,
                    id: SENDPASSWORD_FAIL,
                },
                type: SENDPASSWORD_FAIL,
            });
        });
};
//redirect
export const customRedirect = (to) => {
    history.push(to);
};
