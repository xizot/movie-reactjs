import { GET_FAVOR,GET_POPULAR,GET_NEWEST } from "./../types/filmTypes";


const initialState = {
    new: [],
    favor:[],
    popular:[]
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
        
        default:
            return state;
    }
}

export default filmReducer