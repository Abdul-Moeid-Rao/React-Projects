import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'

const react = createBrowserRouter([
  {path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      }, 
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider react={react}/>
  </React.StrictMode>,
)
