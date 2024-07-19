
import './App.css'

import Profile from './components/profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React</h1>
      
      <Profile />
    </UserContextProvider>
  )
}

export default App
