import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link, withRouter } from 'react-router-dom'
import Navigation from '../../components/Navigation';
import LandingPage from '../../components/Landing';
import HomePage from '../../components/Home';
import { fetchApi } from '../../apiCalls/apiCalls.js';
import { connect } from 'react-redux';
import { addDashboard } from '../../actions/addDashboard';
import TopTen from '../TopTen/TopTen';
import * as helper from '../../helper/helper';
import * as firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig, config } from '../../firebase/firebase';

class App extends Component {

  componentDidMount = async () => {
    const dashboard = await fetchApi();
    const dashWithCap = helper.createMarketCap(dashboard);
    const sorted = helper.sortByCaps(dashWithCap);
    const topTenCurrencies = sorted.slice(0, 10);
    const trimmed = helper.trimData(topTenCurrencies);
    const targetData = helper.createCapPercentage(trimmed);
    this.props.addDashboard(targetData);
  }

  render() {
    return (
    <div>
      <Navigation />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={HomePage} /> 
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <TopTen />
      <div className='content-container'/>
      <div className='blur' />
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDashboard: (dashboard) => dispatch(addDashboard(dashboard))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
