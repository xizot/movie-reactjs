import { GET_SEARCH, FILTER, CHANGE_SEARCH_KEY } from "./../types/search.type";

const initialState = {
    page: 0,
    totalPage: 1,
    data: [],
    filter: [],
    isFilter: false,
    searchKey: "",
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload,
            };
        case GET_SEARCH:
            return {
                ...state,
                page: action.payload.page,
                totalPage: action.payload.totalResults,
                data: action.payload.results,
                searchKey: action.payload.searchKey,
            };
        case FILTER:
            let filter =
                action.payload.cat !== "all"
                    ? state.data.filter((item) =>
                          item.genres.some(
                              (item) =>
                                  item.toLowerCase() === action.payload.cat
                          )
                      )
                    : [];
            return {
                ...state,
                filter: filter,
                isFilter: action.payload.cat !== "all" ? true : false,
            };
        default:
            return state;
    }
};
export default searchReducer;
