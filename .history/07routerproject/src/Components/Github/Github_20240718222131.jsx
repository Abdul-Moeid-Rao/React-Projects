// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/Abdul-Moeid-Rao')
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <div className='bg-gray-800 p-6 m-10 rounded-lg shadow-md text-white text-center'>
            <div className='flex flex-col items-center'>
                <img 
                    src={data.avatar_url} 
                    alt='Avatar' 
                    className='w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4' 
                />
                <h1 className='text-4xl font-bold mb-2'>{data.login}</h1>
                <p className='text-lg mb-4'>
                    <a href={data.html_url} target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'>
                        View Profile
                    </a>
                </p>
                <div className='grid grid-cols-2 gap-4 text-lg'>
                    <div className='bg-gray-700 p-4 rounded-lg'>
                        <p className='font-semibold'>Followers</p>
                        <p>{data.followers !== undefined ? data.followers : 'Loading...'}</p>
                    </div>
                    <div className='bg-gray-700 p-4 rounded-lg'>
                        <p className='font-semibold'>Following</p>
                        <p>{data.following !== undefined ? data.following : 'Loading...'}</p>
                    </div>
                    <div className='bg-gray-700 p-4 rounded-lg'>
                        <p className='font-semibold'>Public Repos</p>
                        <p>{data.public_repos !== undefined ? data.public_repos : 'Loading...'}</p>
                    </div>
                    <div className='bg-gray-700 p-4 rounded-lg'>
                        <p className='font-semibold'>Public Gists</p>
                        <p>{data.public_gists !== undefined ? data.public_gists : 'Loading...'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github
