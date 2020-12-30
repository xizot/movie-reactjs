export const isLogin = () => next => action => {
    if (action.needLogin) {
        const token = localStorage.getItem('token')
        // check token here
        // console.log(token)
        // thoi cai nay de sau, gio chua can thiet
        // end check
        if (token) {
            return next(action)
        }
        window.location.href = "/login"
    }
    else {
        return next(action)
    }
}