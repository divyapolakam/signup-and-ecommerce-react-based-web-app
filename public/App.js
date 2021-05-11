import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';


import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";

// Contains facebook and also google login
import GoogleBtn from './GoogleBtn';

import firebase from './firebase';

export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
render() { 
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={GoogleBtn}/>
                    <Route exact path={'/googlebtn'} component={GoogleBtn}/>
                    <Route exact path={'/products/:id'} component={ProductDetail}/>
                    <Route exact path={'/cart'} component={ShoppingCart}/>
                </Switch>
            </BrowserRouter>
        </Provider>

    );
  }
}

export default App;
