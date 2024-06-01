import { useState } from 'react'
import viteLogo from '/vite.svg'  
import { FaFacebook, FaYoutube } from "react-icons/fa";
import './App.css'
import Card from './components/Card.jsx'
import Data from './data.json'
import List from "./components/UniqueList/List.jsx"
import Card1 from "./components/Card1.jsx"
import Bootstrap from './React_Bootstrap/Bootstrap.jsx';
import Conditional_Rendering from './Conditional_Rendering/index.jsx';
import Event_Handler_onChangeindex from './Event_Handler_onChange/index.jsx';
import Hooks_useState from './Hooks_useState/classComponent.jsx';
import Hooks_useState2 from './Hooks_useState/useState.jsx';
import UpdateUseState from './Hooks_useState/UpdateUseState.jsx';
import Form from './components/Form/Form.jsx';
import Child from './components/State_Lifting/Child.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Toggle from './components/Toggole/Toggole.jsx';
import FAQS from './components/FAQ/FAQS.jsx';
import UseEffectExample from './Hooks_useState/useEffect/UseEffectExample.jsx';
import DataFetch from './DataFetch/DataFetch.jsx';
import { ToastContainer, toast } from 'react-toastify';


function Welcome (){
  return <h4>React Component under the hood</h4>;
}


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

  {/*Parent to child using (props)*/}
  const  dataFromParent = "I am from parent (app.jsx)";

  const handleChildData = (childData) => {
      console.log(childData);
  }


    {/*Tostify notification*/}
    const handleAddNewTodo = () =>{
      toast("New todo added Successfully");
    };

    {/*Dynamic and static style*/}
    const error = false;

  return (
    <>
      {/*Logo start*/}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      {/*Logo end*/}
   
      <h1>Vite + React</h1>

      {/*Count start*/}

      <div className="count">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>  
      </div>

      {/*Count end*/}

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
      
                {/*Class component start*/}
                <Card1 name = "Hello, this is class component"/>
                {/*Class component end*/}

                
                {/*React component under the hood start*/}
                <div>
                  <Welcome />
                </div>
                {/*React component under the hood end*/}


              {/*React Icon start*/}
              <div>
                <h2>React Icon</h2>
                <span>
                  <FaFacebook className='icon'/>
                </span>
                <span>
                  <FaYoutube className='icon' />
                </span>
              </div>

                  {/*React with Bootstrap start*/}
                  <div>
                    <h2>Bootstrap with React</h2>
                    <Bootstrap />
                  </div>

            {/*Conditional Rendaring start*/}
            <div>
            <h3>Conditional  Rendering</h3>
              <Conditional_Rendering />
            </div>

        {/*EventHandler Onchange start*/}
        <h4>Event Handler onChange</h4>

          <Event_Handler_onChangeindex />


          {/*useState and Class component start*/}
          <h4>useState and Class component start</h4>

          <Hooks_useState />
          <Hooks_useState2 />

          {/*UpdateUseState start*/}
          <h4>Update useState</h4>
          <UpdateUseState />

          {/*FORM start*/}
          <Form />

          {/*bottom to top(child to parent) start*/}
          <Child dataFromParent = {dataFromParent} onChildData={handleChildData}/>


          {/* App.jsx -> Components -> Home.jsx (todos = 
            ["item1", "item2"]) -> Todos -> Todo 
            Components -> NewTodo */}


    {/*SignUP start*/}
    <SignUp />

              {/*Toggle start*/}
              <h1>Toggle</h1> 
              <Toggle />

              {/*FAQ Start*/}
              <h1>FAQ</h1>
              <FAQS />

              {/*useEffect start*/}
              <UseEffectExample />

              {/*Data Fetch start*/}
              <DataFetch />

              {/*Reach Tostify*/}
              <h3>React Tostify (Notification Message)</h3>
              <button onClick={handleAddNewTodo}>Add new Todo</button>
             <ToastContainer />

             {/*Dynamic and Static style*/}
             <h2 style={
              {
                color: error ? "red" : "green",
                backgroundColor: error ? "orange" : "yellow"
              }
              }>Dynamic and static style</h2>


    </>
  )
}

export default  App