import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amount: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]:value })
  }

  render() {
    return(
      <div>
        <form onSubmit= {this.handleSubmit}>
          <input type='text' name='name' placeholder='name' value={this.state.name} onChange={this.handleChange}/>
          <input type='text' name='amount' placeholder='amount' value={this.state.amount} onChange={this.handleChange}/>
          <input type='submit' />
        </form>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  dashboard: state.dashboard
}


export default connect(mapStateToProps, null)(Home);