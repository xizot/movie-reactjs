import { GET_FAVOR,GET_POPULAR,GET_NEWEST, GET_EPISODE } from "./../types/filmTypes";


const initialState = {
    new: [],
    favor:[],
    popular:[],
    episode: []
}

const filmReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_NEWEST:
            return {
                ...state,
                new: action.payload
            }
    
        case GET_FAVOR:
            return {
                ...state,
                favor: action.payload
            }
        case GET_POPULAR:
            return {
                ...state,
                popular: action.payload
            }
        case GET_EPISODE:
            return {
                ...state,
                episode: action.payload
            }
        
        default:
            return state;
    }
}

export default filmReducer