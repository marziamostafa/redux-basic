import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount]=useState(0)

    const handleIncrement=()=>{
setCount((prev)=>prev+1)
    }
    const handleDecrement=()=>{
        setCount((prev)=>prev-1)
    } 
  return (
    <div className='bg-white'>
        <div>{count}</div>
        <div>
            <button className='bg-blue-700' onClick={handleIncrement}>Increment</button>
            <button className='bg-red-700' onClick={handleDecrement}>Decrement</button>
        </div>
        </div>
  )
}
