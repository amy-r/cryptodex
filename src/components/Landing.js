import React from 'react';
import './Landing.css'

const LandingPage = (props) => {

  return (
    <div className = 'landing'>
      <h1> <span className='crypto'>CRYPTO</span><span className='dex'>DEX</span></h1>
      <p> An open-source indexing app for the cryptocurrency market </p>
    </div>
  )
}

export default LandingPage;