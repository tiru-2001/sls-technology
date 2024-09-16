import { useState } from 'react'
import Services from './services/Services'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Services/>
    </>
  )
}

export default App
