/* eslint-disable */

import { addCurrency } from './addCurrency';
import { addDashboard } from './addDashboard';
import { addUser } from './addUser';
import { getUserPortfolio } from './getUserPortfolio';
import { removeUser } from './removeUser';

describe('actions', () => {

  it('should create a type of ADD_CURRENCY', () => {
    const mockCurrency = {BTC: 1}
    const expected = {type: 'ADD_CURRENCY', currency: mockCurrency}
    expect(addCurrency(mockCurrency)).toEqual(expected)
  })

  it('should create a type of ADD_DASHBOARD', () => {
    const mockDashboard = [ {currency:'BTC'}]
    const expected = {type: 'ADD_DASHBOARD', dashboard: mockDashboard}
    expect(addDashboard(mockDashboard)).toEqual(expected)
  })  

  it('should create a type of ADD_USER', () => {
    const mockUser = 1
    const expected = {type: 'ADD_USER', user: mockUser}
    expect(addUser(mockUser)).toEqual(expected)
  })

  it('should create a type of GET_USER_PORTFOLIO', () => {
    const mockPortfolio = {BTC: 1}
    const expected = {type: 'GET_USER_PORTFOLIO', portfolio: mockPortfolio}
    expect(getUserPortfolio(mockPortfolio)).toEqual(expected)
  })

  it('should create a type of REMOVE_USER', () => {
    const expected={type: 'REMOVE_USER'}
    expect(removeUser()).toEqual(expected)
  })    
})