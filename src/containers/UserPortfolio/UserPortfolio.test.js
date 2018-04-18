/* eslint-disable */

import React from 'react';
import { UserPortfolio, mapStateToProps } from './UserPortfolio.js';
import { shallow } from 'enzyme';
import { calculateValue, calculatePercent, removeMismatches, findMismatches } from '../../helper/helper';
import {mockDashboard} from '../../helper/mockDashboard'; 
jest.mock('../../helper/helper');

describe( 'UserPortfolio', () => {
  let wrapper;
  let mockPortfolio;

  beforeEach( () => {
    mockPortfolio = { BTC: 1, ETH: 1, FAKECOIN:1}
    wrapper = shallow(<UserPortfolio portfolio={mockPortfolio} dashboard={mockDashboard}/>)
  })
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('calls removeMismatches on getPortfolio', () => {
    wrapper.instance().getPortfolio();
    expect(removeMismatches).toHaveBeenCalled;
  }) 

  it('calls calculateValue on getPortfolio', () => {
    wrapper.instance().getPortfolio();
    expect(calculateValue).toHaveBeenCalled;
  })

  it('calls calculatePercent on getPortfolio', () => {
    wrapper.instance().getPortfolio();
    expect(calculatePercent).toHaveBeenCalled;
  })

  it('calls findMismatches on getMismatches', () => {
    wrapper.instance().getMismatches();
    expect(findMismatches).toHaveBeenCalled;
  })
})

describe('mapStateToProps', () => {
  it('should define dashboard props for the container', () => {
    const mockStore = { dashboard: mockDashboard }
    const mapped = mapStateToProps(mockStore)
    expect(mapped.dashboard).toEqual(mockDashboard)
  })

  it('should define user props for the container', () => {
    const mockUser = 1
    const mockStore = {user: mockUser}
    const mapped = mapStateToProps(mockStore)
    expect(mapped.user).toEqual(mockUser)
  })

  it('should define portfolio props for the container', () => {
    const mockPortfolio = {ETH:1, BTC:1}
    const mockStore = {portfolio: mockPortfolio}
    const mapped = mapStateToProps(mockStore)
    expect(mapped.portfolio).toEqual(mockPortfolio)
  })
})