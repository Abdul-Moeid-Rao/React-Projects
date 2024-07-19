// src/components/Profile.jsx
import './App.css'
import Home from '.src/components/Home'
import Login from '.src/components/Login'

import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React</h1>
      <Login />
      <Home />
    </UserContextProvider>
  )
}

export default App
