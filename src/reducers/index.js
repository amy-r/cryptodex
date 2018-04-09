import { combineReducers } from 'redux';
import dashboard from './dashboard-reducer';
import currency from './currencyReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  dashboard,
  currency,
  user
})

export default rootReducer;