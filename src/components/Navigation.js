import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Landing</Link></li>
      </ul>
    </div>
  )
}

export default Navigation;