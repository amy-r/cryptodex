import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserPortfolio.css';
import { calculateValue, calculatePercent, 
  removeMismatches, findMismatches } from '../../helper/helper';
import PropTypes from 'prop-types';

export class UserPortfolio extends Component {

  getPortfolio = () => {
    const { portfolio, dashboard } = this.props;
    const matchedPortfolio = removeMismatches(portfolio, dashboard);
    const values =  calculateValue(matchedPortfolio, dashboard);
    const percentages = calculatePercent(values);

    if (portfolio) {
      const port = Object.keys(matchedPortfolio).map( (currency, currIndex) => {
        return (
          <tr key= {currency}>
            <td> {currency} </td>
            <td> {portfolio[currency]} </td>
            <td> {values[currIndex]} </td>
            <td> {percentages[currIndex]} </td>
          </tr>
        );
      });
      return port;
    }
  }

  getMismatches = () => {
    const { portfolio, dashboard } = this.props;
    const mismatches = findMismatches(portfolio, dashboard);
    if (portfolio) {
      const outliers = Object.keys(mismatches).map( (currency) => {
        return (
          <tr key ={currency}>
            <td> {currency} </td>
            <td> {portfolio[currency]} </td>
          </tr>  
        );
      });
      return outliers;
    } 
  }

  render() {
    return (
      <div>
        <h2> Your Portfolio Today</h2>
        <table className= 'user-portfolio'>
          <tbody>
            <tr>
              <th> Currency </th>
              <th> Amount </th>
              <th> Value (USD) </th>
              <th> Percentage </th>
            </tr>
            {this.getPortfolio()}
          </tbody>  
        </table>
          <h4> Your Assets Outside the Top Ten </h4>
          <table className= 'outliers'>
            <tbody>
              <tr>
                <th> Currency </th>
                <th> Amount </th>
              </tr>
              {this.getMismatches()}
            </tbody>
          </table>   
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  dashboard: state.dashboard,
  user: state.user
});

UserPortfolio.propTypes = {
  portfolio: PropTypes.objectOf(PropTypes.string),
  dashboard: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
  user: PropTypes.shape({
    displayName: PropTypes.string,
    uid: PropTypes.string
  })
};

export default connect(mapStateToProps)(UserPortfolio);
