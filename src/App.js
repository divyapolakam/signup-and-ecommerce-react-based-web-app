import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import GoogleBtn from './GoogleBtn';
import AuthRoute from './AuthRoute';
import { LOGIN } from "./actions/index";
import firebase from './firebase';




export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

  handleClick(){
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    let number = '+917993842779';
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

render() {
  

  const responseFacebook = (response) => {
    console.log(response);
  } 

    

    return (
        <Provider store={store}>
            <BrowserRouter>
            <React.Fragment>
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
                
                <Switch>
                <Route exact path={'/'} component={GoogleBtn}/>
                    <Route exact path={'/googlebtn'} component={GoogleBtn}/>
                    <Route exact path={'/products/:id'} component={ProductDetail}/>
                    <Route exact path={'/cart'} component={ShoppingCart}/>
                </Switch>
                </div>
            </React.Fragment>
            </BrowserRouter>
        </Provider>

    );
  }
}

export default App;
