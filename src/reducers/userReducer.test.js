import userReducer from './userReducer';
import {addUser} from '../actions/addUser';

describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({})
  })

  it('should return a state with a user', () => {
    const mockuser = 1
    const expected = 1
    expect(userReducer(undefined, addUser(mockuser))).toEqual(expected)
  })
})