import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import { AboutComponent } from './components/AboutComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
      <AboutComponent />
    </>
  )
}

export default App
