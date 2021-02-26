import { getErrorResponse, useAuthorization } from "../helper";
import {
    GET_HISTORY_SUCCESS,
    GET_HISTORY_REQUEST,
    GET_HISTORY_FAIL,
} from "../types/history.type";
import axios from "./../axios";

export const getHistory = (page) => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: GET_HISTORY_REQUEST,
    });
    if (token) {
        axios
            .get(`/history?limit=20?page=${page}`, { headers: useAuthorization() })
            .then((res) => {
                dispatch({
                    type: GET_HISTORY_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                if (err) {
                    const error = getErrorResponse(err);
                    dispatch({
                        type: GET_HISTORY_FAIL,
                        paload: error,
                        status: err.response.status,
                    });
                }
            });
    } else {
        dispatch({
            type: GET_HISTORY_FAIL,
        });
    }
};
