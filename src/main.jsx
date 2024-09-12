// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import SingleProduct from './pages/Home/SingleProduct.jsx'
import Shoes from './pages/Other pages/Shoes.jsx'
import Hoodies from './pages/Other pages/Hoodies.jsx'
import Wristwatches from './pages/Other pages/Wristwatches.jsx'
import Cart from './pages/Home/Cart.jsx'
import FaceCap from './pages/Other pages/FaceCap.jsx'
import Weddings from './pages/Other pages/Weddings.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shoes&flipflops",
        element: <Shoes />
      },
      {
        path: "/hoodies",
        element: <Hoodies />
      },
      {
        path: "/wristwatches",
        element: <Wristwatches />
      },
      {
        path: "/facecap",
        element: <FaceCap />
      },
      {
        path: "/weddings",
        element: <Weddings />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
