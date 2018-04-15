import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserPortfolio extends Component {
  constructor() {
    super();
  }

  // getPortfolioNames = (props) => {
  //   const {portfolio} = this.props
  //   const currencyNames = Object.keys(portfolio)
  //   currencyNames.map( (name) => {
  //     return <td> {name} </td>
  //   })
  // }

  getPortfolio = props => {
    const {portfolio} = this.props;
    console.log(portfolio)
    return Object.keys(portfolio).map( (currency, currIndex) => {
      return(
        <tr>
          <td> {currency} </td>
          <td> {portfolio[currency]} </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <h1> i'm your portfolio </h1>
        <table>
            <th> Currency </th>
            <th> Amount </th>
            {this.getPortfolio()}
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio 
})

export default connect(mapStateToProps)(UserPortfolio)
