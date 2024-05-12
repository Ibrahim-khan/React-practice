import React, { useState } from 'react'
import style from './Form.module.css'

 function Form() {

    const [user, setUser] = useState({name: '', email: '', password: '', comment: ''})
    const {name, email, password, comment} = user;

    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    };

    const handleSubmit = (e) => {
        console.log("form is submitted");
        console.log(user);
        e.preventDefault();
    };

  return (
    <div className={style.form}>
        <h4>Form</h4>
        <h1>Registration</h1>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name : </label>
                <input 
                type="text" 
                name='name' 
                id='name' 
                value={name}
                onChange={handleChange}
                placeholder='Name' 
                required 
                />
            </div>
           
            <div>
                <label htmlFor="Email">Email : </label>
                <input 
                type="email" 
                name='email' 
                id='email' 
                value={email}
                onChange={handleChange}
                placeholder='Email' 
                required 
                />
            </div>
            <div>
                <label htmlFor="Password">Password : </label>
                <input 
                type="password" 
                value={password} 
                name='password' 
                id='password' 
                onChange={handleChange}
                placeholder='Password' 
                required 
                />
            </div>
            <div>
                <label htmlFor="Comments">Comments : </label>
                <input 
                type="text" 
                name='comment' 
                value={comment} 
                onChange={handleChange}
                id='comment' 
                placeholder='Comments'  
                />
            </div>
            <div>
                <button type='submit'>Register</button>
            </div>
        
        
        </form>
    </div>
  )
}

export default Form;