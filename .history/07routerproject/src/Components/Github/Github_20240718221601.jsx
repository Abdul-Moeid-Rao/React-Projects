// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect (()=>{
         fetch('https://api.github.com/users/Abdul-Moeid-Rao')
         .then(response => response.json)
         .then(data => {
            setData(data)
         })
    }, [])
    return (
        <div className=' bg-gray-500 p-4 m-10 justify-center text-center text-3xl'>Github id: {data.Id} </div>
    )
}

export default Github
