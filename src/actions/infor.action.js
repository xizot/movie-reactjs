import { GETINFORUSER_SUCCESS,GETINFORUSER_FAIL } from '../types/infor.type';
import axios from './../axios';
import { getError } from './error.action';

export const inforUser = () => (dispatch, getState) => {
    const token = localStorage.getItem("token");
    dispatch({
        type: GETINFORUSER_SUCCESS,
    });
    if (token) {
        axios
            .get("/user")
            .then((res) => {
                dispatch({
                    type:  GETINFORUSER_SUCCESS,
                    payload: res.data,
                });
                console.log(payload)
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