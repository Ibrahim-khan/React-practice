import React, { Component } from 'react'

 class Hooks_useState extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    classCom = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    

  render() {
    const {count} = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.classCom}>Increase</button>
      </div>
    )
  }
}

export default Hooks_useState