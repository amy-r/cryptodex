/* eslint-disable */

import {mockDashboard} from '../../helper/mockDashboard';

export const createMarketCap = jest.fn().mockImplementation( () => {
  return [
      { 'currency' : "BTC",
        'close' : "7436.82313",
        'availableSupply' : "16957550.0",
        'marketCap' : 126110300068.1315 }
    ]
})

export const sortByCaps = jest.fn().mockImplementation( () => {
  return mockDashboard
})

export const trimData = jest.fn().mockImplementation( () => {
  return mockDashboard
})


export const createCapPercentage = jest.fn().mockImplementation( () => {
  return mockDashboard
})

export const removeMismatches = jest.fn().mockImplementation( () => {
  return { BTC: 1, ETH: 1}
})

export const findMismatches = jest.fn().mockImplementation( () => {
  return { FAKECOIN: 1 }
})

export const calculateValue = jest.fn().mockImplementation( () => {
  return [7436.82, 387.43,]
})

export const calculatePercent = jest.fn().mockImplementation( () => {
  return [6.67,13.33,20,26.67,33.33]
})