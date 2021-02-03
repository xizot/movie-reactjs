import { GET_MOVIE_INFO, GET_TV_INFO, GET_MOVIE_REQUEST, GET_MOVIE_REQUEST_FAIL } from "./../types/movie.type";

const initialState = {
    isLoading: false,
    isLoaded: true,
    data: [],
    error: null
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_MOVIE_REQUEST:
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
                error: null
            }
        case GET_TV_INFO:
        case GET_MOVIE_INFO:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false,
                isLoaded: true,
                error: null
            }
        case GET_MOVIE_REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                error: action.payload.data
            }
        default:
            return state;
    }
}
export default movieReducer