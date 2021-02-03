import { GET_VIDEO, GET_VIDEO_FAIL, GET_VIDEO_REQUEST } from "./../types/stream.type";
const initialState = {
    error: null,
    isLoading: true,
    isLoaded: false,
    data: []
}

const streamReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEO_REQUEST:
            return {
                ...state,
                isLoading: true,
                isLoaded: false
            }
        case GET_VIDEO:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isLoaded: true
            }
        case GET_VIDEO_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoaded: false,
                data: [],
                error: action.payload.msg
            }

        default:
            return state
    }
}
export default streamReducer