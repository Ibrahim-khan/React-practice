import React  from 'react';
import { object, string, number, date } from 'yup';
import {useFormik} from "formik";

const SignUp = () => {

    const formik = useFormik({
        initialValues : {
            name : '',
            email : '',
            password : ''
        },

        validationSchema: object({
            name: string().min(2, "Name must have atleast 2 characters").required(),
            email: string().email().required(),
            password: string().min(6, "Password must have atleast 6 characters").required(),
        }),

        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm({values : ""});
        }
    });

    const nameError = formik.touched.name && 
    formik.errors.name && (
    <span style={{color:"red"}}>
        {formik.errors.name}
    </span>);

    const emailError = formik.touched.email && 
    formik.errors.email && (
    <span style={{color:"red"}}>{formik.errors.email}
    </span>);

    const passwordError = formik.touched.email && 
    formik.errors.password && (
    <span style={{color:"red"}}>
        {formik.errors.password}</span>);


  return (
    <div>
      <h1>SignUp with formik</h1>
      <form onSubmit={formik.handleSubmit}>

            <div>
                <label htmlFor="name">Name : </label>
                <input type="text" id='name' 
                name='name' onChange={formik.handleChange}
                value={formik.values.name} 
                />
                {nameError}

            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" id='email' 
                name='email' onChange={formik.handleChange}
                value={formik.values.email} 
                />
                <br />
                {emailError}
            </div>

            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" id='password' 
                name='password' onChange={formik.handleChange}
                value={formik.values.password} 
                />
                {passwordError}
            </div>
            <button type="submit">Signup</button>

            

      </form>
    </div>
  )
}

export default SignUp
