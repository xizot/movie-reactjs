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
  INFO_LOADING
} from "../types/infor.type";

const initialState = {
  isUploading: false,
  isUploaded: true,
  isLoading: true,
  data: "",
  update: false,
  avatar: false,
  urlAvatar: localStorage.getItem("avatar") || {},
  code: localStorage.getItem("code"),
};
const inforReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO_LOADING: {
      return {
        ...state,
        isLoading: true
      }
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
      };
    case UPDATE_AVATAR_FAIL:
    case GET_AVATAR_FAIL:
      return {
        ...state,
        avatar: false,
      };
    case GET_AVATAR_SUCCESS:
      localStorage.setItem("avatar", JSON.stringify(action.payload));
      return {
        ...state,
        avatar: true,
        urlAvatar: action.payload,
        isUploading: false,
        isUploaded: true,
        isLoading: false

      };
    case UPDATE_AVATAR_SUCCESS:
      return {
        ...state,
        avatar: true,
        isUploading: false,
        isUploaded: true,
        isLoading: false

      };
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        update: true,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        update: false,
      };
    case UPDATE_USER_SUCCESS:
      return {
        update: true,
      };
    default:
      return state;
  }
};

export default inforReducer;
