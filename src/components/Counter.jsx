import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(state => state + 1)
    }
    const decrement = () => {
        setCount(state => state - 1)
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter
