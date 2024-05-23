import React, { useState, useEffect } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleOnClick = () => {
        setCount (count => count + 1);
    };

    useEffect (()=>{
        // Calls with only first render
        console.log("useEffect");
    }, []);

  return (
    <div>
        {console.log("rednering")}
      <h1>useEffect</h1>
      <h1>Count: {count}</h1>
      <button onClick={handleOnClick}> + </button>

      <button onClick={() => {
        setIsLoading (!isLoading);
      }}
      > 
       isLoading 
      
      </button>

    </div>
  )
}

export default UseEffectExample
