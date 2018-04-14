import React from 'react';
import './Landing.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig, config } from '../firebase/firebase';
import * as firebase from 'firebase';

const LandingPage = (props) => {

  return (
    <div className = 'landing'>
      <h1> <span className='crypto'>CRYPTO</span><span className='dex'>DEX</span></h1>
      <p> An open-source indexing app for the cryptocurrency market </p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> 
    </div>
  )
}

export default LandingPage;