import React, { useState } from 'react'

export default function Hooks_useState2() {

    const [count, setCount] = useState(0)
    const useIncrement = () => {
        setCount(count + 1)
    }

  return (
    <div>
        <h1>Count: {count}</h1>
      <button onClick={useIncrement}>Increment</button>
    </div>
  )
}


