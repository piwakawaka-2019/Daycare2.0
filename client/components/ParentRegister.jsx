import React from 'react'



class  ParentRegister extends React.Component{
  constructor(){
    super()
    this.state = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: '',
    }
    this.updateState = this.updateState.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateState(e){
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e) {
    e.preventDefault()
    console.log(this.state)
  }
  render (){
  return(
    <div>
      <h1><br/><br/></h1>
      <h2>Sign Up</h2>
      <form>
        <h3>First Name</h3> 
        <input type='text' name='first_name' onChange={this.updateState}></input> <br/>
        <h3>Last Name</h3>
        <input type='text' name='last_name' onChange={this.updateState}></input> <br/>
        <h3>Username</h3>
        <input type='text' name='username' onChange={this.updateState}></input> <br/>
        <h3>Password</h3>
        <input type='text' name='password' onChange={this.updateState}></input> <br/>
        <h3>Email</h3>
        <input type='text' name='email' onChange={this.updateState}></input> <br/> <br/>
        <button onClick={this.submit}>submit</button> <br/>
      </form>
    </div>
  )
}

}
export default ParentRegister