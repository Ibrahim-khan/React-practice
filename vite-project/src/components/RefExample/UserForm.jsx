import React, { Component } from 'react'

export default class UserForm extends Component {
  render() {
    return (
      
        <form>
            <div className="form-field">
                <label htmlFor="userName">UserName : </label>
                <input type="text" id="userName"/>
            </div>
            <div className="form-field">
                <label htmlFor="Password">Password : </label>
                <input type="Password" id="Password"/>
            </div>
        </form>
      
    )
  }
}
