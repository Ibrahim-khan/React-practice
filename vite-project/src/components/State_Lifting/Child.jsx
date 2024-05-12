import React from 'react'

const Child = (props) => {
   
    const dataFromChild = "I am from child component"
    props.onChildData(dataFromChild);

  return (
    <div>
      <p>I am child component</p>
      <p>{props.dataFromParent}</p>
    </div>
  )
}

export default Child
