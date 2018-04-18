import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import LandingPage from '../../components/Landing/Landing';
import HomePage from '../Home/Home';
import { fetchApi } from '../../apiCalls/apiCalls.js';
import { connect } from 'react-redux';
import { addDashboard } from '../../actions/addDashboard';
import * as helper from '../../helper/helper';
import PropTypes from 'prop-types';

export class App extends Component {

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
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={HomePage} /> 
        <div className='content-container'/>
        <div className='blur' />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addDashboard: (dashboard) => dispatch(addDashboard(dashboard))
});

App.propTypes = {
  addDashboard: PropTypes.func
};

export default withRouter(connect(null, mapDispatchToProps)(App));
