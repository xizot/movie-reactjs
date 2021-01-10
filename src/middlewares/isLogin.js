

export const isLogin = () => next => action =>{

    // if (action.needLogin) {
    //     // window.location.href = "/login"
    // }
    // else {
    // }
    return next(action)
}
// export const isAdmin = () => next => action => {
//     if (action.needLogin) {
//         const token = localStorage.getItem('token')
//         if (token) {
//             return next(action)
//         }
//         window.location.href = "/login"
//     }
//     else {
//         return next(action)
//     }
// }