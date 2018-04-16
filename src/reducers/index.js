import { combineReducers } from 'redux';
import dashboard from './dashboard-reducer';
import currency from './currencyReducer';
import user from './userReducer';
import portfolio from './portfolioReducer'

const rootReducer = combineReducers({
  dashboard,
  currency,
  user, 
  portfolio
})

export default rootReducer;