import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { addCurrency } from '../../actions/addCurrency';
import { addUser } from '../../actions/addUser';
import { withRouter } from 'react-router-dom';
import { writeCurrency } from '../../helper/firebaseFunctions.js';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      amount: ''
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        const displayName = user.displayName;
        const uid = user.uid;
        const userInfo = { displayName, uid}
        this.props.logIn(userInfo)         
      } else {
        this.props.history.push('/')
      }
    })  
  }

  handleSubmit = (event) => {
    const { addCurrency, user } = this.props
    event.preventDefault();
    const newCurrency = {...this.state}
    addCurrency(newCurrency)
    console.log(user)
    writeCurrency(user.uid, newCurrency)
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]:value })
  }

  logOut = () => {
    firebase.auth().signOut();
    this.props.history.push('/')
  }

  render() {
    return(
      <div>
        <header>
          <h1> <span className='crypto'>CRYPTO</span><span className='dex'>DEX</span></h1>
          <button className='logout' onClick= {this.logOut}> Log Out </button>     
        </header>
        <form onSubmit= {this.handleSubmit}>
          <input type='text' name='name' placeholder='name' value={this.state.name} onChange={this.handleChange}/>
          <input type='text' name='amount' placeholder='amount' value={this.state.amount} onChange={this.handleChange}/>
          <input type='submit' />
        </form>  
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  addCurrency: (currency) => dispatch(addCurrency(currency)),
  logIn: (user) => dispatch(addUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));