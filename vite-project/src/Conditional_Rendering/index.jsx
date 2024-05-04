import React, { Component } from 'react'
import HomePage from './HomePage'
import LogInPage from './LogInPage'

 class Conditional_Rendering extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
    render() {
        const{isLoggedIn} = this.state
        let element;   //element = isLoggedIn ? <HomePage /> : <LogInPage />

    if(isLoggedIn){
        element =  <HomePage />
    }
    else{
        element =  <LogInPage />
    }
    
    return(
        <div>{element}</div>
    ) 

  }
}

export default Conditional_Rendering
