import React from 'react'

export default function Stats({ totalCount }) {
    return (
        <div className='border-[1px] border-gray-500 shadow mx-auto w-[300px] h-[100px] mt-10 rounded px-4  
        flex flex-col items-center justify-center text-2xl font-bold'>
            Total Count : {totalCount}
        </div>
    )
}
