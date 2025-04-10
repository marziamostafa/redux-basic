import React, { useState } from 'react'
import Count from '../Count/Count'
import Button from '../Button/Button'

export default function Counter({count,onIncrement,onDecrement}) {
    // const [count, setCount] = useState(0)

    // const handleIncrement = () => {
    //     setCount((prev) => prev + 1)
    // }
    // const handleDecrement = () => {
    //     setCount((prev) => prev - 1)
    // }
    return (

        <div className='bg-white border-[1px] border-gray-300 rounded-lg shadow-md p-4 w-[300px] mx-auto mt-10'>
            <Count count={count} />
            <div className='flex gap-2 items-center justify-center mt-4'>
                <Button handler={onIncrement}>Increment</Button>
                <Button type="danger" handler={onDecrement}>Decrement</Button>

            </div>
        </div>


    )
}
