import {
    GETINFORUSER_SUCCESS,
    GETINFORUSER_FAIL,
} from "../types/infor.type";

const initialState = {
    isLoading: false,
    data:[],
    code: localStorage.getItem("code"),
};
const inforReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETINFORUSER_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case GETINFORUSER_FAIL:
            return {
                isLoading: false,
            };            
        default:
            return state;
    }
};

export default inforReducer;