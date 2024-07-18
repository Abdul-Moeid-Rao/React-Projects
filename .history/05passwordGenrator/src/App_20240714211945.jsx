import { useCallback, useEffect, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passGenerator = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789";
    if (char) str += "!@#$&*%";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      
    }
    setPassword(pass)

  }, [length,number, char, setPassword]) 
  
  useEffect(()=>{
    passGenerator()
  }, [length, number, char, passGenerator])

  return (
    <div className='w-full max-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 justify-center'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    </div>
  )
}

export default App
