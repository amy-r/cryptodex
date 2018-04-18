/* eslint-disable */
import React from 'react';
import { App, mapDispatchToProps } from './App.js';
import { shallow } from 'enzyme';
import { fetchApi } from '../../apiCalls/apiCalls.js';
import * as helper from '../../helper/helper';
jest.mock('../../apiCalls/apiCalls');
jest.mock('../../helper/helper');

describe('App', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper).toMatchSnapshot();
  });

  it('calls fetchApi on componentDidMount', async () => {
    const wrapper = shallow(<App addDashboard={jest.fn()}/>, {disableLifecycleMethods: false});
    expect(fetchApi).toHaveBeenCalled();
  })

  it('calls createMarketCap on componentDidMount', async () => {
    const wrapper = shallow(<App addDashboard={jest.fn()}/>, {disableLifecycleMethods: false});
    expect(helper.createMarketCap).toHaveBeenCalled();
  })

  it('calls sortByCaps on componentDidMount', async () => {
    const wrapper = shallow(<App addDashboard={jest.fn()}/>, {disableLifecycleMethods: false});
    expect(helper.sortByCaps).toHaveBeenCalled();
  })

  it('calls trimData on componentDidMount', async () => {
    const wrapper = shallow(<App addDashboard={jest.fn()}/>, {disableLifecycleMethods: false});
    expect(helper.trimData).toHaveBeenCalled();    
  })

  it('calls createCapPercentage on componentDidMount', async () => {
    const wrapper = shallow(<App addDashboard={jest.fn()}/>, {disableLifecycleMethods: false});
    expect(helper.createCapPercentage).toHaveBeenCalled();    
  })

  it('calls addDashboard on componentDidMount', async () => {
    const wrapper = shallow(<App addDashboard={jest.fn()}/>, {disableLifecycleMethods: true});
    expect(wrapper.props().addDashboard).toHaveBeenCalled;    
  })
})  

describe('MDTP', () => {
  it('should call dispatch on addDashboard', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addDashboard();
    expect(mockDispatch).toHaveBeenCalled;
  })
})