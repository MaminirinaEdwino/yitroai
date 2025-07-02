import { useState } from 'react'
import './App.css'
import LandingPage from './components/landingPage'

function App() {
  const [cartCount,setCartCount] = useState(0)
  const [user, setUser] = useState({
    firstName: "",
    username: "",
    is_authenticated: false 
  })
  return (
    <>
      <LandingPage user={user} cartCount={cartCount}></LandingPage>
    </>
  )
}

export default App
