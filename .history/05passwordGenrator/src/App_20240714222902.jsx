import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

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
  
const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
}, [password])

  useEffect(()=>{
    passGenerator()
  }, [length, number, char, passGenerator])

  return (
    <div className='w-full shadow-md rounded-lg px-4 py-3 my-40  bg-gray-800 text-orange-500 justify-center'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flax shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px03'
      placeholder='password'
      readOnly
      ref={passwordRef} />
      <button
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={18}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label htmlFor="">Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={number}
        id='numberInput'
        onChange={()=>{
          setNumber((prev) => !prev)
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={char}
        id='charInput'
        onChange={()=>{
          setChar((prev) => !prev)
        }}
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
    </div>
  )
}

export default App
