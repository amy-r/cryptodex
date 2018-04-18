import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { addCurrency } from '../../actions/addCurrency';
import { addUser } from '../../actions/addUser';
import { removeUser } from '../../actions/removeUser';
import { getUserPortfolio } from '../../actions/getUserPortfolio';
import { withRouter } from 'react-router-dom';
import { writeCurrency, getUserData } from '../../helper/firebaseFunctions.js';
import UserPortfolio from '../UserPortfolio/UserPortfolio';
import TopTen from '../TopTen/TopTen';
import './Home.css';
import PropTypes from 'prop-types';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'BTC',
      amount: ''
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        const displayName = user.displayName;
        const uid = user.uid;
        const userInfo = { displayName, uid};
        this.props.logIn(userInfo);     
        getUserData(uid).then((portfolio) => this.props.getUserPortfolio(portfolio));
      } else {
        this.props.history.push('/');
      }
    }) 
  }

  handleSubmit = (event) => {
    const { addCurrency, user } = this.props;
    event.preventDefault();
    const newCurrency = {...this.state}
    addCurrency(newCurrency);
    writeCurrency(user.uid, newCurrency);
    this.setState({name: '', amount: ''});
    getUserData(user.uid).then((portfolio) => this.props.getUserPortfolio(portfolio));
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]:value });
  }

  logOut = () => {
    firebase.auth().signOut();
    this.props.logOut();
    this.props.history.push('/');
  }

  createOptions = () => {
    const { dashboard } = this.props
    const options = dashboard.map( (curr) => {
      return <option key={curr.currency} value={curr.currency}> {curr.currency} </option>
    })
    return options
  }

  render() {
    return (
      <div>
        <header>
          <h1> <span className='crypto'>CRYPTO</span><span className='dex'>DEX</span></h1>
          <button className='logout' onClick= {this.logOut}> Log Out </button>     
        </header>
        <div className='body'>
          <div className= 'left'>
            <UserPortfolio />
            <h4> Add a currency you own </h4>
            <form onSubmit= {this.handleSubmit}>
              <select name='name' onChange={this.handleChange}>
               {this.createOptions()}
              </select>  
              <input type='text' name='amount' placeholder='amount' value={this.state.amount} onChange={this.handleChange}/>
              <input type='submit' />
            </form>
          </div>  
          <div className='right'>
            <h2> Today's Market </h2>  
            <TopTen />
          </div>
        </div>    
      </div>
    )   
  }
}

export const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
  user: state.user,
  portfolio: state.portfolio
});

export const mapDispatchToProps = (dispatch) => ({
  addCurrency: (currency) => dispatch(addCurrency(currency)),
  logIn: (user) => dispatch(addUser(user)),
  logOut: () => dispatch(removeUser()),
  getUserPortfolio: (portfolio) => dispatch(getUserPortfolio(portfolio))
});

Home.propTypes = {
  logIn: PropTypes.func,
  addCurrency: PropTypes.func,
  getUserPortfolio: PropTypes.func,
  portfolio: PropTypes.objectOf(PropTypes.string),
  dashboard: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
  user: PropTypes.shape({
    displayName: PropTypes.string,
    uid: PropTypes.string,
  })
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));