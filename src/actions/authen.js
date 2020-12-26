import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types/authenType";
// import axios from "./../axios";

export const login = (username, password) => async dispatch => {
    // ko call api duoc, keu server xai cors di, ty keu data truyen vao dung chua
    // const data = await axios.post('/auth/login/', { username, password })
    // if (data) {
    //     console.log(data)
    // }
    // toi kiem tra lai sau, cai nay luu local storage a? gio luu ne
    if (username === "abc" && password === "123") {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                token: "12321321321312",
                refreshToken: "sotn"
            }
        })
    }
    else {
        dispatch({
            type: LOGIN_FAIL,
            payload: {
                token: null,
                refreshToken: null
            }
        })
    }
}
