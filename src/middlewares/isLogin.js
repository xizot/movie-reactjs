export const isLogin = () => next => action =>{
    if(action.needLogin){
        const token = localStorage.getItem('token')
        // check token here
        
        // end check
        if(token){
            return next(action)
        }
        window.location.href="/login"
    }
    else{
        return next(action)
    }
}