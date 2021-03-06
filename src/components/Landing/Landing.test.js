/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';
import * as firebase from 'firebase';

describe('Landing', () => {
  it('should match snapshot', () => {
    firebase.auth = jest.fn();
    const wrapper = shallow(<Landing />, {disableLifecycleMethods:true})
    expect(wrapper).toMatchSnapshot();
  })
})