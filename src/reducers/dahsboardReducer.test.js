import dashboardReducer from './dashboard-reducer';
import {addDashboard} from '../actions/addDashboard';

describe('dashboardReducer', () => {
  it('should return the initial state', () => {
    expect(dashboardReducer(undefined, {})).toEqual([])
  })

  it('should return a state with a currency', () => {
    const mockDashboard = [{currency:'BTC'}]
    const expected = [{currency:'BTC'}]
    expect(dashboardReducer(undefined, addDashboard(mockDashboard))).toEqual(expected)
  })
})