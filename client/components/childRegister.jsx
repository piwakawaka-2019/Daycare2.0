import React, { Component } from 'react';
import { connect } from 'react-redux'




class  childRegister  extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value:'',
      first_name:'',
      last_name:'',
      date_of_birth:'',


    };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event){
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event){
      event.preventDefault()
      this.props.dispatch()
      alert('A name was submitted:' = this.state.value);
    
  
    
  }
  render (){
  return(
    <div>
           <form OnSubmit={this.handleSubmit}>
            <label htmlFor="">
            firstName:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            lastName:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            Date of Birth:
            <input type="text" value={this.state.value} onChange={this.handleChange} />

            </label>
            <input type="submit" value="Submit" />
            </form>
    </div>
  )
}

}
export default childRegister