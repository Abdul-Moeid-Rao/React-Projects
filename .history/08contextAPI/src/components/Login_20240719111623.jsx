/* eslint-disable no-unused-vars */
import React, {useState, useContext} from 'react'
import UserContext from './Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
const {setUser} = useContext(UserContext)

    const handelSubmit = (e) =>{
     e.preventDefault()
     setUser({username, password})
    }
    return (
        <>
        <h2>Login</h2>
        {/* <input type="text" */}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username' />
            {/* <input type="text" */}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='username' />
            {/* <button onClick={handelSubmit}>Submit</button> */}

            <section>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Log In
        </h2>
       
        <form action="#" method="POST" class="mt-8">
          <div class="space-y-5">
            <div>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="UserName"
                />
              </div>
            </div>
            <div>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
   
  </div>
</section>

            </>
        
    )
}

export default Login
