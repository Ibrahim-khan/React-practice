import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'  
import './App.css'
import Card from './components/Card.jsx'
import Data from './data.json'
import List from "./components/UniqueList/List.jsx"


function App() {
  const [count, setCount] = useState(0);

    let items = [];
    for(let x=0; x<Data.length; x++){
      items.push(<Card titleText = {Data[x].title} descText  = {Data[x].desc}/>)
    }

   let items1 = [];
   items1 = Data.map((item1, index1) => <Card key={index1} titleText = {item1.title} descText = {item1.desc}/>);

   const users = [
    {
      fullName: "Ibrahim Khan",
      age: 28,
      phones: [
        {home: "12343543"},
        {office: "9876554456"},
      ]
    },
    {
      fullName: "Shihab Khan",
      age: 28,
      phones: [
        {home: 12343543},
        {office: 9876554456},
      ]
    }
  ]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>  
      </div>

          <div>
            <h1 className='headingStyle'>Welcome React Practice</h1>
            {items}
            <p className='headingStyle'>Same Design using Map</p>
            {items1}

            <p className='headingStyle'>More than easy Same Design using Map</p>
            {Data.map((item, index) => <Card key={index} titleText = {item.title} descText = {item.desc}/>)}
          </div>

          <h1>Todo List</h1>
          <List />

      <div>
      <h1>Nested Map</h1>      
      {
        users.map((user, index) => ( 
        <article key={index}> 
              <h3> FullName : {user.fullName}</h3>
              <p>Age : {user.age}</p>
              {
                user.phones.map((phone, index) =>( 
                    <div key={index}>
                    <p>{phone.home}</p>
                    <p>{phone.office}</p>
                  </div>
                  ))}
        </article>             

  ))}
      </div>
      
          


    </>
  )
}

export default  App