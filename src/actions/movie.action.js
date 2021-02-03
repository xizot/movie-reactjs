import { GET_MOVIE_REQUEST } from "./../types/movie.type";
export const getMovieInfo = (id) => dispatch => {
    dispatch({
        type: GET_MOVIE_REQUEST
    })

    // request here
}
export const getTvShowInfo = (id) => dispatch => {
    dispatch({
        type: GET_MOVIE_REQUEST
    })
    // request here

}