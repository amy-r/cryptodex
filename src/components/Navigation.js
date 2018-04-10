import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

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