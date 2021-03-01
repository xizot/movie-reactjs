import {
    SEARCH_MOVIE,
    SEARCH_TV,
    SEARCH_REQUEST,
    SEARCH_REQUEST_FAIL,
    SEARCH_REQUEST_SUCCESS,
    GET_MOVIE_INFO,
    GET_TV_INFO,
    GET_REQUEST,
    GET_REQUEST_FAIL,
    GET_REQUEST_SUCCESS,
    GET_MOVIE_DETAIL,
    GET_TV_DETAIL,
    GET_DETAIL_REQUEST,
    GET_DETAIL_REQUESTT_FAIL,
    GET_DETAIL_REQUEST_SUCCESS,
    ADD_REQUEST,
    ADD_REQUEST_SUCCESS,
    ADD_REQUEST_FAIL,
} from "./../types/admin.type";
import axios from "./../axios";
import { getErrorResponse, useAuthorization } from "../helper";
export const searchMovieByQuery = (query, page = 1) => (dispatch) => {
    dispatch({
        type: SEARCH_REQUEST,
    });

    axios
        .get(`/tmdb/search/movie?query=${query}&page=${page}`, {
            headers: useAuthorization(),
        })
        .then((res) => {
            dispatch({
                type: SEARCH_REQUEST_SUCCESS,
            });

            dispatch({
                type: SEARCH_MOVIE,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: SEARCH_REQUEST_FAIL,
            });
        });
};
export const searchTvByQuery = (query, page = 1) => (dispatch) => {
    dispatch({
        type: SEARCH_REQUEST,
    });

    axios
        .get(`/tmdb/search/tv?query=${query}&page=${page}`, {
            headers: useAuthorization(),
        })
        .then((res) => {
            dispatch({
                type: SEARCH_REQUEST_SUCCESS,
            });
            dispatch({
                type: SEARCH_TV,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: SEARCH_REQUEST_FAIL,
            });
        });
};
export const getMovieInfoById = (id) => (dispatch) => {
    dispatch({
        type: GET_REQUEST,
    });

    axios
        .get(`/tmdb/movie/${id}`)
        .then((res) => {
            dispatch({
                type: GET_REQUEST_SUCCESS,
            });

            dispatch({
                type: GET_MOVIE_INFO,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: GET_REQUEST_FAIL,
            });
        });
};
export const getTvInfoById = (id) => (dispatch) => {
    dispatch({
        type: GET_REQUEST,
    });

    axios
        .get(`/tmdb/tv/${id}`)
        .then((res) => {
            dispatch({
                type: GET_REQUEST_SUCCESS,
            });

            dispatch({
                type: GET_TV_INFO,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: GET_REQUEST_FAIL,
            });
        });
};

export const getMovieDetail = (id) => (dispatch) => {
    dispatch({
        type: GET_DETAIL_REQUEST,
    });

    axios
        .get(`/tmdb/movie/${id}`, { headers: useAuthorization() })
        .then((res) => {
            dispatch({
                type: GET_DETAIL_REQUEST_SUCCESS,
            });

            dispatch({
                type: GET_MOVIE_DETAIL,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: GET_DETAIL_REQUESTT_FAIL,
            });
        });
};
export const getTvDetail = (id) => (dispatch) => {
    dispatch({
        type: GET_DETAIL_REQUEST,
    });

    axios
        .get(`/tmdb/tv/${id}`, { headers: useAuthorization() })
        .then((res) => {
            dispatch({
                type: GET_DETAIL_REQUEST_SUCCESS,
            });

            dispatch({
                type: GET_TV_DETAIL,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: GET_DETAIL_REQUESTT_FAIL,
            });
        });
};
export const addMovie = (data) => (dispatch) => {
    dispatch({
        type: ADD_REQUEST,
    });
    axios
        .post("/media/movie", data, { headers: useAuthorization() })
        .then((res) => {
            dispatch({
                type: ADD_REQUEST_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            const error = getErrorResponse(err);
            dispatch({
                type: ADD_REQUEST_FAIL,
                payload: error,
                status: err.response.status,
            });
        });
};
export const addTV = (data) => (dispatch) => {
    dispatch({
        type: ADD_REQUEST,
    });
    axios
        .post("/media/tv", data, { headers: useAuthorization() })
        .then((res) => {
            dispatch({
                type: ADD_REQUEST_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            const error = getErrorResponse(err);

            dispatch({
                type: ADD_REQUEST_FAIL,
                payload: error,
                status: err.response.status,
            });
        });
};
export const addSeason = (data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`/media/tv/season`, data, { headers: useAuthorization() })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
export const updateSeason = (data) => {
    return new Promise((resolve, reject) => {
        axios
            .put(`/media/tv/season`, data, { headers: useAuthorization() })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
export const deleteSeason = (mediaId, season) => {
    return new Promise((resolve, reject) => {
        axios
            .patch(
                "/media/tv/season",
                { mediaId, season },
                { headers: useAuthorization() }
            )
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
