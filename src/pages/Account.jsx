import React from 'react'
import { Redirect } from 'react-router-dom'

function Account() {
    const user = null
    return (
        <>
            {
                user ?
                    'Account Works'
                :
                <Redirect to="/login" />
            
            }
            
        </>
    )
}

export default Account
