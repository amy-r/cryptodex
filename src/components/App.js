import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link, withRouter } from 'react-router-dom'
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import * as routes from '../constants/routes';
import { fetchApi } from '../apiCalls/apiCalls.js';
import { connect } from 'react-redux';
import { addDashboard } from '../actions/addDashboard';

class App extends Component {

  componentDidMount = async () => {
    const dashboard = await fetchApi();
    const newDash = this.createMarketCap(dashboard);
    const sorted = newDash.sort(function(a,b) {
      return b.marketCap - a.marketCap;
    });
    const sliced = sorted.slice(0, 10)
    console.log(sliced)
    this.props.addDashboard(sliced);
  }

  createMarketCap = (dashboard) => {
    const newDash = dashboard.map( (currency) => {
      currency['marketCap']= (currency.close * currency.availableSupply);
      return currency
    });
    return newDash
  }

// Use sort by market cap and constrain to 10 results to sort it by market cap and 
// market cap is a lookup that will find the currencies market cap. 
// Take the market cap and divide by sum of market caps
// to get target portfolio allocation
// our strategy is just what's the top ten at any given moment.
// as an investor, come here and say what percent of my
// portfolio. 

// take what you own, multiply by current price in that asset, determine
// what percent of  

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

const mapDispatchToProps = (dispatch) => ({
  addDashboard: (dashboard) => dispatch(addDashboard(dashboard))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
