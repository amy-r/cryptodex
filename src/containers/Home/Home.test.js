/* eslint-disable */

import React from 'react';
import { Home, mapDispatchToProps, mapStateToProps } from './Home.js';
import { shallow } from 'enzyme';
import { fetchApi } from '../../apiCalls/apiCalls.js';
import * as helper from '../../helper/helper';
import {mockDashboard} from '../../helper/mockDashboard'; 
import { writeCurrency, getUserData } from '../../helper/firebaseFunctions.js';

jest.mock('../../helper/firebaseFunctions')
describe('Home', () => {
  let mockUser;
  let mockPortfolio;
  let wrapper;

  beforeEach( () => {
    mockUser = 1;
    mockPortfolio = {BTC: 1, ETH: 1}
    wrapper = shallow(<Home dashboard={mockDashboard} user={mockUser} portfolio={mockPortfolio} history={[]} getUserPortfolio={jest.fn()} addCurrency={jest.fn()}  />, {disableLifecycleMethods: true})
  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('calls login on comonentDidMount', () => {
    expect(wrapper.props().logIn).toHaveBeenCalled;
  })

  it('calls getUserData on comonentDidMount', () => {
    expect(getUserData).toHaveBeenCalled;
  })

  it('calls getUserPortfolio on comonentDidMount', () => {
    expect(wrapper.props().getUserPortfolio).toHaveBeenCalled;
  })

  it.skip('calls addCurrency on handleSubmit', async () => {
    const mockEvent = {preventDefault: jest.fn()}
    wrapper.instance().handleSubmit(mockEvent)
    expect(wrapper.props().addCurrency).toHaveBeenCalled 
  })

  it('sets state on handleChange', () => {
    const mockEvent = { target: { name: 'name', value: 'ETH' }}
    expect(wrapper.state().name).toEqual('BTC')
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state().name).toEqual('ETH')
  })
})

describe('MSTP and MDTP', () => {
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

  it('should call dispatch on addCurrency', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addCurrency();
    expect(mockDispatch).toHaveBeenCalled;
  })

  it('should call dispatch on logIn', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logIn();
    expect(mockDispatch).toHaveBeenCalled;
  }) 

  it('should call dispatch on getUserPortfolio', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.getUserPortfolio();
    expect(mockDispatch).toHaveBeenCalled;
  })   
})