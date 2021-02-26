import { getErrorResponse, useAuthorization } from "../helper";
import {
    GET_WATCHLIST_SUCCESS,
    GET_WATCHLIST_REQUEST,
    GET_WATCHLIST_FAIL,
} from "../types/watchlist.type";
import axios from "./../axios";

export const getWatchlist = (page) => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: GET_WATCHLIST_REQUEST,
    });
    if (token) {
        axios
            .get(`/watchlist?limit=20?page=${page}`, { headers: useAuthorization() })
            .then((res) => {
                dispatch({
                    type: GET_WATCHLIST_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                if (err) {
                    const error = getErrorResponse(err);
                    dispatch({
                        type: GET_WATCHLIST_FAIL,
                        paload: error,
                        status: err.response.status,
                    });
                }
            });
    } else {
        dispatch({
            type: GET_WATCHLIST_FAIL,
        });
    }
};
