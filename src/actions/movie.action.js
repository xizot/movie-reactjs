import {
    GET_MOVIE_INFO,
    GET_MOVIE_REQUEST,
    GET_MOVIE_REQUEST_FAIL,
    GET_TV_INFO,
} from "./../types/movie.type";
import axios from "./../axios";
import { getErrorResponse } from "../helper";
export const getMovieInfo = (id) => (dispatch) => {
    dispatch({
        type: GET_MOVIE_REQUEST,
    });
    axios
        .get(`/media/details/${id}`)
        .then((res) => {
            if (res.data.movie) {
                dispatch({
                    type: GET_MOVIE_INFO,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type: GET_TV_INFO,
                    payload: res.data,
                });
            }
        })
        .catch((err) => {
            const error = getErrorResponse(err);
            dispatch({
                type: GET_MOVIE_REQUEST_FAIL,
                payload: error,
            });
        });
    // request here
};
