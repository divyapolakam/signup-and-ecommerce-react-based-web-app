import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import { Redirect, Route } from "react-router";
import AuthRoute from './AuthRoute';
import FacebookLogin from 'react-facebook-login';
import firebase from "./firebase";
import "./App.scss"
import { LOGIN } from "./actions/index";

const CLIENT_ID = '310415075664-kra42pi1br9m35tfetqscnocodjb08dd.apps.googleusercontent.com';





class GoogleBtn extends Component {
   constructor(props) {
    super(props);
      this.state = {
      isLogined: false,
      accessToken: ''
    };
}


  handleClick(){
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    let number = '+919999999999';
    firebase.auth().signInwithPhoneNumber(number,recaptcha).then(function(e){
          let code = prompt('enter the otp','');
          if(code == null) return;
          e.confirm(code).then(function(result){
              console.log(result.user,'user');
              document.querySelector('label').textContent= result.user.phoneNumber + "Number verified";
	}).catch((error)=>{
	console.log(error)
	})
    })
}
    componentDidMount(){
    const{isAuthUser,type} = this.props;
    if(type ==="guest" && isAuthUser){
	this.setState({isLogined:false})
    }
    else if(type==="private"&& !isAuthUser){
        this.setState({isLogined:true})
    }
}

  
  handleLoginFailure (response) {
    this.setState({isLogined : false})
    alert('Failed to log in')
  }


  render() {
  const responseFacebook = (response) => {
    console.log(response);
  } 

    return (
      <div>
      <label/>
        <div className="App">
        <h3>Hello, Welcome to INCRED</h3>
        <br/>
      	<FacebookLogin
        appId="238588658020166"
        fields="name,email,picture"
        callback={responseFacebook}
      	/>
	<br/><br/>
	<button onClick={this.handleClick}> SIGNUP WITH MOBILE NUMBER  </button>
	<br/><br/> 
    	<GoogleLogin
          clientId= '310415075664-kra42pi1br9m35tfetqscnocodjb08dd.apps.googleusercontent.com'
          buttonText='Signup With Google'
          onSuccess={ () => this.setState({isLogined : true}) }
          onFailure={this.handleLoginFailure}
          cookiePolicy={ 'single_host_origin' }
        />
       {this.state.isLogined ? <Redirect to="/products"/>:<Redirect to="/googlebtn"/>}
    </div>
    </div>
    )
  }
}

export default GoogleBtn;
