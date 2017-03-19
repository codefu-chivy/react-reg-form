import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/login-form";

ReactDOM.render(<LoginForm/>, document.getElementById("app-container"));

(function randomCode() {
  var code = [];
  var alphaStr = "abcdefghijklmnopqrstuvwxyz";
  var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var numAlphaArr = numArr.concat(alphaStr.split(""));
  for (var i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * numAlphaArr.length);
    code.push(numAlphaArr[random]);
  }
  code = code.toString().replace(/,/g, "");
  document.getElementById("code").textContent = code;
}());
