import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { LoadCountries } from './components/LoadCountries'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <LoadCountries/>
      
    </div>
  )
}

export default App
