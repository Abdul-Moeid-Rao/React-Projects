import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (

      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        
        <div className="fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center">
          <div className='flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 justify-center gap-3 bg-white px-3 py-2 shadow-lg rounded-3xl'>
  <button
     onClick={() => setColor("black")}
    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Black 
  </button>
  <button
    onClick={() => setColor("yellow")}
    className="rounded-md border border-yellow-600 px-3 py-2 text-sm font-semibold text-yellow-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
  >
    Yellow
  </button>
  <button
    onClick={() => setColor("red")}
    className="rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
  >
    Red
  </button>
  <button
    onClick={() => setColor("green")}
    className="rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Green
  </button>
  <button
    onClick={() => setColor("olive")}
    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-olive-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Olive
  </button>
  <button
    onClick={() => setColor("gray")}
    className="rounded-md border border-gray-600 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Gray
  </button>
  <button
    onClick={() => setColor("pink")}
    className="rounded-md border border-pink-600 px-3 py-2 text-sm font-semibold text-pink-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Pink
  </button>
  <button
    onClick={() => setColor("purple")}
    className="rounded-md border border-purple-600 px-3 py-2 text-sm font-semibold text-purple-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Purple
  </button>
  <button
    onClick={() => setColor("lavender")}
    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    lavender
  </button>
  <button
     onClick={() => setColor("white")}
    className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    White 
  </button>
</div>
</div>
</div>

    
  )
}

export default App
