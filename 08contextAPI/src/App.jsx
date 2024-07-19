/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1>React</h1>
      <Signin />
      <Home />
    </UserContextProvider>
  );
}

export default App;
