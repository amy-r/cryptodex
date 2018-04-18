import portfolioReducer from './portfolioReducer';
import {getUserPortfolio} from '../actions/getUserPortfolio'

describe('portfolioReducer', () => {
  it('should return the initial state', () => {
    expect(portfolioReducer(undefined, {})).toEqual({})
  })

  it('should return a state with a portfolio', () => {
    const mockPortfolio = {BTC: 1}
    const expected = {"BTC": 1}
    expect(portfolioReducer(undefined, getUserPortfolio(mockPortfolio))).toEqual(expected)
  })
})