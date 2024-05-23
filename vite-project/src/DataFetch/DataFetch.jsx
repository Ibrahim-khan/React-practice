import React, {useState, useEffect } from 'react'

const DataFetch = () => {
    const[todos, setTodos] = useState(null);


    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
           // return res.json();
        })
        .then((data) => {
            setTodos(data);
        });
    }, []);

    const todosElement = 
    todos &&
    todos.map((todo) => {
         return <p key={todo.id}>{todo.title}</p>;
    })

  return (
    <div>
      <h1>Data Fetch</h1>
      <h1>Todos</h1>
      {todosElement}
    </div>
  )
}

export default DataFetch
