// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
    return (
        <div className=' bg-gray-500 p-4 justify-center'>User: {id} </div>
    )
}

export default User
