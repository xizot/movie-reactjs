import {
    CLEAR_SEARCH,
    GET_SEARCH,
    FILTER,
    CHANGE_SEARCH_KEY,
} from "./../types/search.type";
import axios from "./../axios";

export const getSearch = (value) => (dispatch) => {
    axios
        .get(`/media/fetch?query=${value}`)
        .then((res) => {
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
