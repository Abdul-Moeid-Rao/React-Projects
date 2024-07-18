// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
    return (
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">User: {id} </div>
    )
}

export default User
