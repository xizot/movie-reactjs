import { GETINFORUSER_SUCCESS,GETINFORUSER_FAIL,UPDATE_SUCCESS,UPDATE_FAIL } from '../types/infor.type';
import axios from './../axios';
import {clearError,getError } from './error.action';

export const getInfor = () => (dispatch) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: GETINFORUSER_SUCCESS,
    });
    if (token) {
        axios
            .get("/user/")
            .then((res) => {
                dispatch({
                    type:  GETINFORUSER_SUCCESS,
                    payload: res.data
                });
            })
            .catch((err) => {
                if(err){
                    dispatch(
                        getError(err.response.data, err.response.status,GETINFORUSER_FAIL)
                    );
                    dispatch({
                        type: GETINFORUSER_FAIL,
                    });
                }
            });
    } else {
        dispatch({
            type: GETINFORUSER_FAIL,
        });
    }
};

export const update = (
    username,
    displayName,
    email,
    currentPassword,
    confirmPassword,
    dateOfBirth,
    newPassword
) => (dispatch) => {
    const body = {
        username,
        displayName,
        email,
        currentPassword,
        confirmPassword,
        dateOfBirth,
        newPassword
    };
    const token = localStorage.getItem("token");
    dispatch({
        type: GETINFORUSER_SUCCESS,
    });
    if (token) {
    axios
        .put("/user/", body)
        .then((res) => {
            dispatch({
                type: UPDATE_SUCCESS,
                payload: {
                    token: res.data.accessToken,
                    refreshToken: res.data.refreshToken,
                },
            });
            
            dispatch(clearError());
        })
        .catch((err) => {
            if (err.response) {
                dispatch(
                    getError(err.response.data.error || err.response.data.errors, err.response.status, UPDATE_FAIL)
                );
            }
            dispatch({
                payload: { msg:"Server error!!!", status: 500, id: UPDATE_FAIL },
                type: UPDATE_FAIL,
            });
        });
    } else {
        dispatch({
            type: UPDATE_FAIL,
        });
    }
};

