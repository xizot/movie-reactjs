import {
    CLEAR_SEARCH,
    GET_SEARCH,
    FILTER,
    CHANGE_SEARCH_KEY,
} from "./../types/search.type";
import axios from "./../axios";

export const getSearch = (value, page = 1) => (dispatch) => {
    if (!value) return;
    axios
        .get(`/media/fetch?query=${value}&limit=10&page=${page}`)
        .then((res) => {
            console.log(res);
            dispatch({
                type: GET_SEARCH,
                payload: { ...res.data, searchKey: value },
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: CLEAR_SEARCH,
            });
        });
};
export const changeSearchKey = (value) => (dispatch) => {
    dispatch({
        type: CHANGE_SEARCH_KEY,
        payload: value,
    });
};

export const getFilter = (cat = "all") => (dispatch) => {
    dispatch({
        type: FILTER,
        payload: {
            cat,
        },
    });
};
