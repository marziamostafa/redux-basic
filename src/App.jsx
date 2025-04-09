import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div className="card">

        <h1>Simple Counter Application</h1>
        <div>
          <Counter />
        </div>
      </div>

    </>
  )
}

export default App
