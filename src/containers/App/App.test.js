/* eslint-disable */
import React from 'react';
import { App, mapDispatchToProps } from './App.js';
import { shallow } from 'enzyme';
import { fetchApi } from '../../apiCalls/apiCalls.js';
import * as helper from '../../helper/helper';


jest.mock('../../apiCalls/apiCalls');

describe('App', () => {

  let helper;
  let addDashboard;

  // beforeEach( () => {
  //   helper = {
  //     creatMarketCap: () => jest.fn(),
  //     sortByCaps: jest.fn(),
  //     trimData: jest.fn(),
  //     creatCapPercentage: jest.fn(),
  //   }
  // })

  it('renders without crashing', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper).toMatchSnapshot();
  });

  it('calls fetchApi on componentDidMount', async () => {
    const wrapper = shallow(<App addDashboard={jest.fn}/>, {disableLifecycleMethods: false});
    expect(fetchApi).toHaveBeenCalled();
  })

  it('calls creatMarketCap on componentDidMount', async () => {

    helper = {
      creatMarketCap: () => jest.fn(),
      sortByCaps: jest.fn(),
      trimData: jest.fn(),
      creatCapPercentage: jest.fn(),
    }
  
    const wrapper = shallow(<App addDashboard={jest.fn}/>, {disableLifecycleMethods: false});
    expect(helper.createMarketCap).toHaveBeenCalled();
  })
})  
