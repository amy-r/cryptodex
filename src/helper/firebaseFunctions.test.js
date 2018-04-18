import {writeCurrency, firebaseApp, getUserData} from './firebaseFunctions';
import * as firebase from 'firebase';
import { config } from '../firebase/firebase';


describe('writeCurrency', () => {
  it('should send data to firebase', () => {
    const mockUser = { uid: 1, name: 'amy' }
    const mockCurr = {name: 'btc', amount: 10 }

    firebaseApp.database = jest.fn().mockImplementation( (mockUser, mockCurr) => {
      return { ref: jest.fn().mockImplementation( (mockUser, mockCurr) => {
        return { update: jest.fn().mockImplementation( (mockCurr) => {
          return { btc: 10 }
        })}
      })}
    })

    writeCurrency(mockUser, mockCurr)
    expect(firebaseApp.database().ref(mockUser.set)).toHaveBeenCalled
  })

  it('should throw an error when the status is not ok', () => {
    const mockUser = { uid: 1, name: 'amy' }
    const mockCurr = { name: 'btc', amount: 10 }

    firebaseApp.database = jest.fn().mockImplementation( (mockUser, mockCurr) => {
      return {
        update: jest.fn().mockImplementation( (mockUser, mockCurr) => {
          throw new Error('bad status')
        })
      }})
    
    const expected = ('Could not add currency: Error: bad status')
    expect(firebaseApp.database().update).toThrow('bad status')
  })
})

describe('getUserData', () => {
  it('should throw an error when status is not ok', () => {

      const ref = {
        once: jest.fn().mockImplementation(() => Promise.reject({
        error: 'some error'
        }))
      }

      const error = new Error('Could not get user data')

    expect(getUserData(1)).rejects.toEqual(error)
  })
})