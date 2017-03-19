import React from "react";

export default class Bottom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      correct: false
    }
  }
  check = (e) => {
    console.log("hello")
    if (e.target.value === document.getElementById("code").textContent) {
      this.setState({
        correct: true
      })
    }
  };
  sendCheck = (e) => {
    var specialChar = "@!$-_";
    var count = 0;
    var numCount = 0
    var numStr = "1234567890";
    for (var i = 0; i < specialChar.length; i++) {
      if (this.props.password.indexOf(specialChar[i]) !== -1) {
        count++;
      }
    }  
    for (var j = 0; j < this.props.password.length; j++) {
      if (numStr.indexOf(this.props.password[j]) !== -1) {
        numCount++;
      }
    }
    if (!numCount || !count || !this.props.password) {
      $("#pass").toggleClass("password");
      setTimeout(function() {$("#pass").toggleClass("password")}, 2500);
      e.preventDefault();
    }
    if (this.props.username.length <= 6 || !this.props.username) {
      $("#user").toggleClass("password");
      setTimeout(function() {$("#user").toggleClass("password")}, 2500);
      e.preventDefault();
    }
    if (!this.props.email) {
      document.getElementById("email-label").textContent = "Please enter a valid address";
      setTimeout(function() {document.getElementById("email-label").textContent = "Email:"}, 2500);
      e.preventDefault();
    }
    if (!this.state.correct) {
      e.preventDefault();
      document.getElementById("message").textContent = "Incorrect! Enter Again";
      setTimeout(function() {document.getElementById("message").textContent = ""}, 2500)
    }
  };

  render() {
    return (
      <div>
        <h3 id="code"></h3>
        <label htmlFor="random">Enter Random Code Seen Above</label>
        <h2 id="message" className="password"></h2>
        <input id="random" className="form-control" onBlur={this.check}/>
        <button onClick={this.sendCheck} className="btn btn-success" type="submit">Sign Up</button>
      </div>  
    )
  }
}


