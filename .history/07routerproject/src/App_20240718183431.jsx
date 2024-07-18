import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='bg-green-600 p-4'>React Router</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      
    </>
  )
}

export default App
