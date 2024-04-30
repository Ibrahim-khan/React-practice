import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const todoTitle = "Call Family";
const today = "Today : ";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <h1 className='headingStyle'>Welcome to Practice</h1>
    <h3>Welcome to Practice</h3>
    <h2>{todoTitle}</h2>
    <p>{today + " " + dateName + " / " + monthName + " / " + currentYear}</p>



  </React.StrictMode>,
)
