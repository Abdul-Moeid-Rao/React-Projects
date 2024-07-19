import './App.css';
import Home from './components/Home'; // Corrected import path
import Login from './components/Login'; // Corrected import path

import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1>React</h1>
      <Login />
      <Home />
    </UserContextProvider>
  );
}

export default App;
