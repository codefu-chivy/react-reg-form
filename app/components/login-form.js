import React from "react";
import Bottom from "./bottom";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      email: ""
    }
  }
  change = (e) => {
    var val = e.target.value;
    if (e.target.getAttribute("id") ===  "email") {
      this.setState({
        email: val
      })
    }
    else if (e.target.getAttribute("id") === "username") {
      this.setState({
        username: val
      })
    }
    else {
      this.setState({
        password: val
      })
    }
  };
  render() {
    return (
     <div>  
      <div className="login">  
        <form>
          <label id="email-label" htmlFor="email">Email:</label>
          <input onChange={this.change} id="email" className="form-control" type="email"/>
          <label htmlFor="username">Username: <span id="user">(Must be greater than 6 characters long)</span></label>
          <input onChange={this.change} id="username" className="form-control" type="username"/>
          <label htmlFor="password">Password: <span id="pass">(Must contain at least one number and special character (@!$-_ ))</span></label>
          <input onChange={this.change} id="password" className="form-control" type="password"/>
          <Bottom password={this.state.password} username={this.state.username} email={this.state.email}/>
        </form>  
      </div>
     </div>   
    )
  }
}

