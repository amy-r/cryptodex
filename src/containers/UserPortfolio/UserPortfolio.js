import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserPortfolio.css';
import { calculateValue, calculatePercent } from '../../helper/helper';

class UserPortfolio extends Component {

  updateValues = () => {
    const { portfolio } = this.props;
    console.log(portfolio)
  }

  getPortfolio =  (props) => {
    const { portfolio, dashboard } = this.props;
    const values =  calculateValue(portfolio, dashboard);
    const percentages = calculatePercent(values);

    if (portfolio) {
      const port = Object.keys(portfolio).map( (currency, currIndex) => {
        return(
          <tr key= {currency}>
            <td> {currency} </td>
            <td> {portfolio[currency]} </td>
            <td> {values[currIndex]} </td>
            <td> {percentages[currIndex]} </td>
          </tr>
        )
      })
      
    return port
    }
  }

  render() {
    return (
      <div>
        <h2> Your Portfolio </h2>
        <table className= 'user-portfolio'>
          <tbody>
            <tr>
              <th> Currency </th>
              <th> Amount </th>
              <th> Value </th>
              <th> Percentage </th>
            </tr>
            {this.getPortfolio()}
          </tbody>  
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  dashboard: state.dashboard,
  user: state.user
})

export default connect(mapStateToProps)(UserPortfolio)
