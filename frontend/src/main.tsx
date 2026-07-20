import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'

import FrontPage from './pages/FrontPage'
import CreatePage from './pages/CreatePage'

//Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage/>
  },
  {
    path: "/create",
    element: <CreatePage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
