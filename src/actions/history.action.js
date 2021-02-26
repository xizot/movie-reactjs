import { useAuthorization } from "../helper";
import {
    GET_HISTORY_SUCCESS,
    GET_HISTORY_REQUEST,
    GET_HISTORY_FAIL,
} from "../types/history.type";
import axios from "./../axios";
import { getError } from "./error.action";

export const getHistory = () => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: GET_HISTORY_REQUEST,
    });
    if (token) {
        axios
            .get("/history?limit=20", { headers: useAuthorization() })
            .then((res) => {
                dispatch({
                    type: GET_HISTORY_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                if (err) {
                    dispatch(
                        getError(
                            err.response.data,
                            err.response.status,
                            GET_HISTORY_FAIL
                        )
                    );
                    dispatch({
                        type: GET_HISTORY_FAIL,
                    });
                }
            });
    } else {
        dispatch({
            type: GET_HISTORY_FAIL,
        });
    }
};
