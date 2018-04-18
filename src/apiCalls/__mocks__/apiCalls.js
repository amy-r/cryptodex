/* eslint-disable */

import { mockDashboard } from '../../helper/mockDashboard';

export const fetchApi = jest.fn().mockImplementation( () => {
  return Promise.resolve(mockDashboard);
});