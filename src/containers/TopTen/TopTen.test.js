import React from 'react';
import { shallow } from 'enzyme';
import { TopTen, mapStateToProps } from './TopTen';
import { mockDashboard } from '../../helper/mockDashboard'; 

describe('TopTen', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<TopTen dashboard={mockDashboard}/>)
    expect(wrapper).toMatchSnapshot();
  })
})

describe('MSTP', () => {
  it('should define props for the container', () => {
    const mockStore = { dashboard: mockDashboard }
    const mapped = mapStateToProps(mockStore)
    expect(mapped.dashboard).toEqual(mockDashboard)
  })
})