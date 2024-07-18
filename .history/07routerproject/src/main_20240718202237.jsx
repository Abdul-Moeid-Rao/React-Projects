import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'

const react = createBrowserRouter([
  {path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }, 
      {
        path: 'About',
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
