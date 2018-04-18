import React, { Component } from 'react';
import './Landing.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from '../../firebase/firebase';
import * as firebase from 'firebase';
import TopTen from '../../containers/TopTen/TopTen';

class Landing extends Component {

  render() {
    return (
      <div className = 'landing'>
        <h1> 
          <span className='crypto'>CRYPTO</span>
          <span className='dex'>DEX</span>
        </h1>
        <p> 
          An open-source indexing app for the cryptocurrency market
        </p>
        <StyledFirebaseAuth 
          uiConfig={uiConfig} 
          firebaseAuth={firebase.auth()} 
        /> 
        <h2> Current Market Index</h2>
        <TopTen />
      </div>
    );
  }
}

export default Landing;