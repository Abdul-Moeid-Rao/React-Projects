import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) str += '0123456789';
    if (char) str += '!@#$&*%';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, char]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, number, char, passGenerator]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-orange-500">
      <div className="w-full max-w-md shadow-md rounded-lg px-8 py-6 bg-gray-900">
        <h1 className="text-white text-center text-2xl font-semibold mb-6">Password Generator</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={password}
            className="flex-1 outline-none bg-gray-700 text-white py-2 px-4 rounded-l-md"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-4 py-2 rounded-r-md"
          >
            Copy
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="lengthRange" className="block text-white text-sm mb-1">
            Length: {length}
          </label>
          <input
            type="range"
            id="lengthRange"
            min={6}
            max={18}
            value={length}
            className="w-full cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="numberInput"
            checked={number}
            className="cursor-pointer"
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="ml-2 text-white text-sm">
            Include Numbers
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="charInput"
            checked={char}
            className="cursor-pointer"
            onChange={() => setChar((prev) => !prev)}
          />
          <label htmlFor="charInput" className="ml-2 text-white text-sm">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
