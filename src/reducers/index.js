import { combineReducers } from 'redux';
import dashboard from './dashboard-reducer';
import currency from './currencyReducer'

const rootReducer = combineReducers({
  dashboard,
  currency
})

export default rootReducer;