import {
    SEARCH_MOVIE,
    SEARCH_TV,
    SEARCH_REQUEST,
    SEARCH_REQUEST_FAIL,
    SEARCH_REQUEST_SUCCESS,
    GET_DETAIL_REQUEST,
    GET_MOVIE_DETAIL,
    GET_TV_DETAIL,
    GET_DETAIL_REQUEST_SUCCESS,
    GET_DETAIL_REQUESTT_FAIL,
} from "./../types/admin.type";
const initialState = {
    searchError: null,
    getError: null,
    addError: null,
    detailError: null,

    isSearching: false,
    isGetting: false,
    isAdding: false,
    isGettingDetail: false,

    isSearched: false,
    isGot: false,
    isAdded: false,
    isGotDetail: true,

    searchData: null,
    data: null,
    movieDetailData: null,
    tvDetailData: null,
};
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        //▼ Search ▼
        case SEARCH_REQUEST:
            return {
                ...state,
                searchError: null,
                isSearching: true,
                isSearched: false,
                searchData: null,
            };
        case SEARCH_MOVIE:
        case SEARCH_TV:
            return {
                ...state,
                searchData: action.payload,
            };
        case SEARCH_REQUEST_SUCCESS:
            return {
                ...state,
                searchError: null,
                isSearching: false,
                isSearched: true,
            };
        case SEARCH_REQUEST_FAIL:
            return {
                ...state,
                searchError: action.payload,
                isSearching: false,
                isSearched: true,
                searchData: null,
            };

        //▲ Search ▲

        //▼ Detail ▼
        case GET_DETAIL_REQUEST:
            return {
                ...state,
                isGettingDetail: true,
                isGotDetail: false,
                movieDetailData: null,
                yvDetailData: null,
            };
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetailData: action.payload,
            };
        case GET_TV_DETAIL:
            return {
                ...state,
                tvDetailData: action.payload,
            };
        case GET_DETAIL_REQUEST_SUCCESS:
            return {
                ...state,
                isGettingDetail: false,
                isGotDetail: true,
            };
        case GET_DETAIL_REQUESTT_FAIL:
            return {
                ...state,
                isGettingDetail: false,
                isGotDetail: true,
                movieDetailData: null,
                tvDetailData: null,
            };
        //▲ Detail ▲
        default:
            return state;
    }
};
export default adminReducer;
