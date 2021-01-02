// import { history } from "../helper";
import { FORGOT_SUCCESS, FORGOT_FAIL } from '../types/forgot.type';
import axios from './../axios';
import { getError } from './error.action';

export const recoveryEmail = (email) => (dispatch) => {
    axios
        .post('/auth/sendrecoveryemail/', { email })
        .then((res) => {
            dispatch({
                type: FORGOT_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            if (err.response) {
                dispatch(
                    getError(
                        err.response.data,
                        err.response.status,
                        FORGOT_FAIL
                    )
                );

                alert('Failed to send email!');
            }
            dispatch({
                type: FORGOT_FAIL,
            });
        });
};
