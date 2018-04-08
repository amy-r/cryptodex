import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { addCurrency } from '../actions/addCurrency';
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
    //need to redirect to landing page
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
  addCurrency: (currency) => dispatch(addCurrency(currency))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));