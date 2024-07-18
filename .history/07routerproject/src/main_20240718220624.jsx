import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      }, 
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'user/:id',
        element: <User />
      },
      {
        path: '/github',
        element: <Github />
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Router path ='/' element={<App />}>
//       <Router path='' element={<Home /> } />
//       <Router path='about' element={<About /> } />
//       <Router path='contact' element={<Contact /> } />

//     </Router>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
