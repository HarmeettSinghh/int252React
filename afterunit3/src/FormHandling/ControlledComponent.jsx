import React, { Component } from 'react'

//rcc shortcut for class component
export default class ControlledComponent extends Component {
    constructor(){
        super();
        this.state = {
            firstName : '',
            lastName : '',
            review: ''
        };
    }

    changeFirstName = (e) => {
        this.setState({ firstName: e.target.value });
    }

    changeLasttName = (e) => {
        this.setState({ lastName: e.target.value });
    }

    changeReview = (e) => {
        this.setState({ review: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`Welcome ${this.state.firstName} ${this.state.lastName} `);
        e.preventDefault();
    }
    handleInputs = (e) =>{
        const {name,value} = e.target;
        this.setState({name:value});
    }

  render() {
    return (
      <div>
         <form className='form' onSubmit={this.handleSubmit}>
            First Name :
            <input 
                type="text" 
                value={this.state.firstName}
                onChange={this.handleInputs}
                name = 'firstName'
            /> 
            <br />

            Last Name:
            <input 
                type="text" 
                value={this.state.lastName}
                onChange={this.this.handleInputs}
                name='lastName'
            />
            <br />

            Write Review:
            <textarea
                value={this.state.review}
                onChange={this.changeReview}
            ></textarea>
            <br />

            <button type='submit'>Submit Form</button>
         </form>
      </div>
    )
  }
}
