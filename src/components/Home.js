import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { addCurrency } from '../actions/addCurrency';
import { addUser } from '../actions/addUser';
import { withRouter } from 'react-router-dom';
import { writeCurrency } from '../helper/firebaseFunctions.js'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      amount: ''
    }
  }

  componentDidMount = () => {
    console.log(this.props)
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        // User is signed in.
        const displayName = user.displayName;
        const uid = user.uid;
        const userInfo = { displayName, uid}
        console.log(uid)
        this.props.logIn(userInfo)
         
      };
    })  
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newCurrency = {...this.state}
    this.props.addCurrency(newCurrency)
    writeCurrency(newCurrency)
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]:value })
  }


  logOut = () => {
    firebase.auth().signOut();
    console.log('out');
    this.props.history.push('/')
  }

  render() {
    return(
      <div>
        <button onClick= {this.logOut} > Log Out </button>
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
  dashboard: state.dashboard
})

const mapDispatchToProps = (dispatch) => ({
  addCurrency: (currency) => dispatch(addCurrency(currency)),
  logIn: (user) => dispatch(addUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));