import {
    GETINFORUSER_SUCCESS,
    GETINFORUSER_FAIL,
    UPDATE_SUCCESS,
    UPDATE_FAIL,
} from "../types/infor.type";

const initialState = {
    isLoading: false,
    data:'',
    update:false,
    code: localStorage.getItem("code"),
};
const inforReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETINFORUSER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case GETINFORUSER_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case UPDATE_FAIL:
            return {
                ...state,
                update: false,
            };            
        case UPDATE_SUCCESS:
            return {
                update: true,
            };                        
        default:
            return state;
    }
};

export default inforReducer;