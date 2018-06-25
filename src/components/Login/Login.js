import React, {Component} from 'react';
//import './Login.css';
import axios from 'axios';

class Login extends Component {

constructor(props){
super(props);
this.state={
username:'',
password:''

}
  this.login=this.login.bind(this);

}
login(){

    var userName = document.getElementById('userName').value;
    var password = document.getElementById('passWord').value;

    var data = "grant_type=password&username="+userName+"&"+"password="+password; //store username and password in data variable

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          "Accept": "*/*",
          'Authorization': 'Basic ' + (new Buffer(


            'UkZYghIwBZF_XCr8tuXUWpvSnmka'+':'+'a_8dmM5emfcDCcvZF43B90L6M_sa' // Consumer Key And Consumer Secret




          ).toString('base64')) // Encode using base64
      }
    };

    axios.post('https://localhost:8243/token', data, axiosConfig) //FRONTEND_URI
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);


      document.cookie=data.access_token;  //store access_token in cookie



;
if(res.status==200){
   document.location.href = "http://localhost:3000/";
 }else{

   alert("In correct Username or Password");

 }

    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
      alert("In correct Username or Password");
    });



}
  render() {
    return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">

        <h4>Login</h4>

        <label> Username</label>
        <input type="text" id= "userName" name="username" placeholder="Username"/>

        <label>Password</label>
        <input type="password" id ="passWord" name="password"  placeholder="password" />

        <input type="submit" className="button success" value="Login" onClick={this.login}/>

        <a href="/signup">Registration</a>
        </div>
      </div>
    );
  }
}
export default Login;
