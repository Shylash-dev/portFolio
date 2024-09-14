import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import { AboutComponent } from './components/AboutComponent'
import { SkillsComponent } from './components/SkillsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
      <AboutComponent />
      <SkillsComponent />
    </>
  )
}

export default App
