import {
    GET_FAVOR,
    GET_POPULAR,
    GET_NEWEST,
    GET_EPISODE,
    GET_COMMENT,
    LOAD_COMMENT
} from "./../types/film.type";

const initialState = {
    new: [],
    favor: [],
    popular: [],
    episode: [],
    comment: []
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENT:
            return {
                ...state,
                comment: [...action.payload]
            };
        case GET_COMMENT:
            var newComments =[...state.comment, ...action.payload]
            return {
                ...state,
                comment:  newComments.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
            };
        case GET_NEWEST:
            return {
                ...state,
                new: action.payload,
            };

        case GET_FAVOR:
            return {
                ...state,
                favor: action.payload,
            };
        case GET_POPULAR:
            return {
                ...state,
                popular: action.payload,
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
