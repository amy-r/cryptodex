import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link } from 'react-router-dom'
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import * as routes from '../constants/routes';


class App extends Component {
  render() {
    return (
    <div>
      <hr/>
      <Navigation />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/signup' component={SignUpPage} />
      <Route exact path='/signin' component={SignInPage} />
      <Route exact path='/pw-forget' component={PasswordForgetPage} />
      <Route exact path='/home' component={HomePage} /> 
      <Route exact path='/account' component={AccountPage} /> 
    </div>
    );
  }
}

export default App;
