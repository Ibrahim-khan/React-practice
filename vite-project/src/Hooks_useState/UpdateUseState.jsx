import React, {useState} from 'react'

export default function UpdateUseState() {
    const [count, setCount] = useState(0)
    const upUseIncrement = () => {
        setCount ((preViouseCount) => preViouseCount + 1); // 0 + 1 = 1
        setCount ((preViouseCount) => preViouseCount + 1); // 1 + 1 = 2
        setCount ((preViouseCount) => preViouseCount + 1); // 2 + 1 = 3
      }

  return (
    <div>
        <h3>Count : {count}</h3>
        <button onClick={upUseIncrement}>+</button>
    </div>
  )
}
