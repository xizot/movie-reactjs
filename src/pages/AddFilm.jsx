import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../actions/user.action'

function AddFilm() {
    const dispatch = useDispatch()
    const use = useSelector(state => state.auth.user)
    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])
    return (
        <div>
            
        </div>
    )
}

export default AddFilm
