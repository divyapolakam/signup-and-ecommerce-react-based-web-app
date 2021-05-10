import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import { Redirect, Route } from "react-router";
import AuthRoute from './AuthRoute';


const CLIENT_ID = '310415075664-kra42pi1br9m35tfetqscnocodjb08dd.apps.googleusercontent.com';


class GoogleBtn extends Component {
   constructor(props) {
    super(props);
      
      this.state = {
      isLogined: false,
      accessToken: ''
    };
}
    componentDidMount(){
    const{isAuthUser,type}=this.props;
    if(type==="guest" && isAuthUser){
        this.setState({isLogined:false})
    }
    else if(type==="private"&& !isAuthUser){
       this.setState({isLogined:true})
}
}

  
  handleLoginFailure (response) {
    this.setState({isLogined:false})
    alert('Failed to log in')
  }


  render() {
    return (
    <div>
    <GoogleLogin
          clientId= '310415075664-kra42pi1br9m35tfetqscnocodjb08dd.apps.googleusercontent.com'
          buttonText='Signup With Google'
          onSuccess={ this.setState({isLogined : true})}
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
        />
       {this.state.isLogined?<Redirect to="/products"/>:<Redirect to="/"/>}
    </div>
    )
  }
}

export default GoogleBtn;