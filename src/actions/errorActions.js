import { GET_ERRORS } from "../types/errorTypes";


export const getError = payload => dispatch =>{
    dispatch({
        type: GET_ERRORS,
        payload,
        
    })
}
