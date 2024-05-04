import React, { Component } from 'react'

 class Event_Handler_onChangeindex extends Component {
  
        constructor(props) {
          super(props)
        
          this.state = {
             changedValue : ''
          }
        }
        

    handleOnChange = (e) => {
        
        this.setState({
            changedValue : e.target.value
        })
        
    }
  
    render() {
    return (
      <div>
        <input type='text' onChange={this.handleOnChange}/>
        <button class='sText' onClick={this.handleClick}>Search Data</button>
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}


export default Event_Handler_onChangeindex