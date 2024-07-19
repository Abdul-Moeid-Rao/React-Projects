/* eslint-disable no-unused-vars */
import React, {useState, useContext} from 'react'
import UserContext from './Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handelSubmit = () =>{

    }
    return (
        <>
        <h2>Login</h2>
        <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username' />
            <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='username' />
            <button onClick={handelSubmit}>Submit</button>
            </>
        
    )
}

export default Login
