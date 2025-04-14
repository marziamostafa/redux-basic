import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter/Counter'
import Stats from './components/Stats/Stats'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counters/countersSlice'
import Posts from './components/Posts/Posts'

const initialCounter = [
  {
    id: 1,         // for counter 1
    value: 0
  },
  {
    id: 2,          // for counter 2
    value: 0
  },
]

function App() {
  // const [counters, setCounters] = useState(initialCounter)

  const counters = useSelector((state) => state.counters)
  const dispatch = useDispatch()

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0)

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  }

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId))
  }

  return (
    <>


      <div className="card">

        <h1>Simple Counter Application</h1>
        <div>
          {
            counters.map((counter) => (
              <Counter key={counter.id} count={counter.value} onIncrement={() => handleIncrement(counter.id)} onDecrement={() => handleDecrement(counter.id)} />
            ))
          }

          <Stats totalCount={totalCount} />
          <Posts />
        </div>
      </div>

    </>
  )
}

export default App
