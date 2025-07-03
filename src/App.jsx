import { useState } from 'react'
import './App.css'
import LandingPage from './components/landingPage'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import MarketPlace from './components/marketPlace'

function App() {
  const [cartCount,setCartCount] = useState(0)
  const [user, setUser] = useState({
    firstName: "",
    username: "",
    is_authenticated: false 
  })
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage user={user} cartCount={cartCount}></LandingPage>
    },
    {
      path: '/marketplace',
      element: <MarketPlace user={user} cartCount={cartCount}></MarketPlace>
    }
  ])
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
