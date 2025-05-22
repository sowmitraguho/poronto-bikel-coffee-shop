import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayouts from './Layouts/MainLayouts.jsx'
import Home from './Components/Home/Home.jsx'
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'addcoffee',
        Component: AddCoffee
      },
      {
        path: 'upadatecoffee',
        Component: UpdateCoffee
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
