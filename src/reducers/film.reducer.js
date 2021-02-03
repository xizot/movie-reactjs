import {
    GET_EPISODE,
    GET_COMMENT,
    LOAD_COMMENT,
    GET_MOVIE,
    GET_TVSHOW,
    GET_WATCHLATER
} from "../types/film.type";

const initialState = {
    movie: [],
    tv: [],
    watchLater: [],
    episode: [],
    comment: [],
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENT:
            return {
                ...state,
                comment: [...action.payload]
            };
        case GET_COMMENT:
            var newComments = [...state.comment, ...action.payload]
            return {
                ...state,
                comment: newComments.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)
            };
        case GET_TVSHOW:
            return {
                ...state,
                tv: action.payload,
            };
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload,
            };
        case GET_WATCHLATER:
            return {
                ...state,
                watchLater: action.payload,
            };
        case GET_EPISODE:
            return {
                ...state,
                episode: action.payload,
            };

        default:
            return state;
    }
};

export default filmReducer;
