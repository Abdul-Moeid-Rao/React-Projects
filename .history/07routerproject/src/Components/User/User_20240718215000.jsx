// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
    return (
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl bg-white border-gray-200 px-4 lg:px-6 py-2.5 text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">User: {id} </div>
    )
}

export default User
