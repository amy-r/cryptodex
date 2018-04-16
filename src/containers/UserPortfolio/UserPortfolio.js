import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserPortfolio.css';
import { calculateValue, calculatePercent } from '../../helper/helper';
import { updateValue } from '../../helper/firebaseFunctions';

class UserPortfolio extends Component {
  constructor() {
    super();
  }

  getValues = () => {
    const {portfolio, dashboard, user} = this.props;
    // console.log(portfolio)
    // const values = portfolio.map( (userCurr) => {
    //   calculateValue(userCurr, dashboard)
    // })
    // console.log(values)
  }

  updateValues = () => {
    const { portfolio } = this.props;
    console.log(portfolio)
  }

  getPortfolio = (props) => {
    const {portfolio, dashboard} = this.props;
    const values =  calculateValue(portfolio, dashboard);
    const percentages = calculatePercent(values)

    return Object.keys(portfolio).map( (currency, currIndex) => {
      return(
        <tr>
          <td> {currency} </td>
          <td> {portfolio[currency]} </td>
          <td> {values[currIndex]} </td>
          <td> {percentages[currIndex]} </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <h1> i'm your portfolio </h1>
        <table className= 'user-portfolio'>
            <th> Currency </th>
            <th> Amount </th>
            <th> Value </th>
            <th> percentage </th>
            {this.getPortfolio()}
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
