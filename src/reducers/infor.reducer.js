import {
    GET_INFOR_SUCCESS,
    GET_INFOR_FAIL,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_AVATAR_REQUEST,
    UPDATE_AVATAR_SUCCESS,
    UPDATE_AVATAR_FAIL,
    GET_AVATAR_SUCCESS,
    GET_AVATAR_FAIL,
    GET_AVATAR_REQUEST,
    INFO_LOADING,
    DELETE_AVATAR_REQUEST,
    DELETE_AVATAR_SUCCESS,
    DELETE_AVATAR_FAIL,
} from "../types/infor.type";

const initialState = {
    isUploading: false,
    isUploaded: false,
    isLoading: false,
    isDeleted: false,
    data: "",
    update: false,
    avatar: false,
    urlAvatar: localStorage.getItem("avatar") || {},
    code: localStorage.getItem("code"),

    resMessage: null,
    isUpdateFailed: null,
};
const inforReducer = (state = initialState, action) => {
    switch (action.type) {
        case INFO_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_INFOR_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case GET_INFOR_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case UPDATE_AVATAR_REQUEST:
        case GET_AVATAR_REQUEST:
            return {
                ...state,
                avatar: true,
                isUploading: true,
                isUploaded: false,
                isLoading: false,
            };
        case UPDATE_AVATAR_FAIL:
        case GET_AVATAR_FAIL:
            localStorage.removeItem("avatar");
            return {
                ...state,
                avatar: false,
                isLoading: false,
                isUploading: false,
                isUploaded: true,
                urlAvatar: {
                    uri:
                        "https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/n31VRDodbaZxkrZmmzyYSFNVpW5.jpg",
                }, // default
            };
        case GET_AVATAR_SUCCESS:
            localStorage.setItem("avatar", JSON.stringify(action.payload));
            return {
                ...state,
                avatar: true,
                urlAvatar: action.payload,
                isUploading: false,
                isLoading: false,
            };
        case UPDATE_AVATAR_SUCCESS:
            return {
                ...state,
                avatar: true,
                isUploading: false,
                isUploaded: true,
                isLoading: false,
            };
        case DELETE_AVATAR_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case DELETE_AVATAR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDeleted: true,
            };
        case DELETE_AVATAR_FAIL:
            return {
                ...state,
                isLoading: false,
                isDeleted: false,
            };
        case UPDATE_USER_REQUEST:
        case "UPDATE_USER_RESET":
            return {
                ...state,
                update: true,
                resMessage: null,
                isUpdateFailed: null,
            };
        case UPDATE_USER_FAIL:
            return {
                ...state,
                update: false,
                isUpdateFailed: true,
                resMessage: action.payload,
            };
        case UPDATE_USER_SUCCESS:
            return {
                update: true,
                isUpdateFailed: false,
                resMessage: "Updated successfully",
            };
        default:
            return state;
    }
};

export default inforReducer;
