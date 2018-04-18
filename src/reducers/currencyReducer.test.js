import currencyReducer from './currencyReducer';
import {addCurrency} from '../actions/addCurrency';

describe('currencyReducer', () => {
  it('should return the initial state', () => {
    expect(currencyReducer(undefined, {})).toEqual([])
  })

  it('should return a state with a currency', () => {
    const mockCurrency = {BTC: 1}
    const expected = [{"BTC": 1}]
    expect(currencyReducer(undefined, addCurrency(mockCurrency))).toEqual(expected)
  })
})