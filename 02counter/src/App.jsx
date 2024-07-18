import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if (count < 10) {
      setCount(count + 1)
    } else {
      alert('Sorry! You cannot add more value')
    }
  }

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      alert('Sorry! You cannot go below 0')
    }
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
