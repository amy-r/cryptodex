import * as helper from './helper.js';
import {mockDashboard, mockDashboard2} from './mockDashboard.js';

describe('createMarketCap', () => {
  it('should take in an array of objects and add a property', () => {
    const mockDashboard3 = [
      { 'currency' : "BTC",
        'close' : "7436.82313",
        'availableSupply' : "16957550.0" }
    ]
    const expected = [
      { 'currency' : "BTC",
        'close' : "7436.82313",
        'availableSupply' : "16957550.0",
        'marketCap' : 126110300068.1315 }
    ]

    expect(helper.createMarketCap(mockDashboard3)).toEqual(expected)
  })
})

describe('sortByCaps', () => {
  it('should take in an array of objects and sort them by marketCap', () => {

    const expected = [
      { 'currency' : "BTC",
        'price' : "7436.82313",
        'availableSupply' : "16957550.0",
        'marketCap' : 126110300068.1315 },
      { 'currency' : "ETH",
        'price' : "387.43253",
        'availableSupply' : "98680455.0",
        'marketCap' : 38207824855.0488 },
      { 'currency' : "XRP",
        'price' : "0.49032",
        'availableSupply' : "39094520623.0",
        'marketCap' : 19161006447.74476 },
    ]

    expect(helper.sortByCaps(mockDashboard)).toEqual(expected)
  })
})

describe('trimData', () => {
  it('should take in an array of objects and trim them down to two properties', () => {

    const expected = [
      {"currency": "BTC", "marketCap": 126110300068.1315, "price": "7436.82313"}, 
      {"currency": "ETH", "marketCap": 38207824855.0488, "price": "387.43253"}, 
      {"currency": "XRP", "marketCap": 19161006447.74476, "price": "0.49032"}
    ]

    expect(helper.trimData(mockDashboard2)).toEqual(expected)
  })
})

describe('totalCap', () => {
  it('should take in an array of objects and sum all the market caps', () => {
    const expected = 183479131370.92505

    expect(helper.totalCap(mockDashboard)).toEqual(expected)
  })
})

describe('createCapPercentage', () => {
  it('should take in an array of objects and create a percentage property', () => {

    const expected = [ 
      { "availableSupply": "16957550.0", 
        "price": "7436.82313", 
        "currency": "BTC", 
        "marketCap": 126110300068.1315, 
        "percentage": 68.73}, 
      { "availableSupply": "98680455.0", 
        "price": "387.43253", 
        "currency": "ETH", 
        "marketCap": 38207824855.0488, 
        "percentage": 20.82}, 
      { "availableSupply": "39094520623.0", 
        "price": "0.49032", 
        "currency": "XRP", 
        "marketCap": 19161006447.74476, 
        "percentage": 10.44} 
    ]

    expect(helper.createCapPercentage(mockDashboard)).toEqual(expected)     
  })
})

describe('removeMismatches', () => {
  it('should take in portfolio and dashboard and return an array of the common currencies', () => {
    const mockPortfolio = { BTC:1, ETH: 1, FAKECOIN:1 }
    const expected = { BTC:1, ETH: 1}
    expect(helper.removeMismatches(mockPortfolio, mockDashboard)).toEqual(expected)
  })
})

describe('findMisMatches', () => {
  it('should take in portfolio and dashboard and return an array of the outlier currencies', () => {
    const mockPortfolio = { BTC:1, ETH: 1, FAKECOIN:1 }
    const expected = { FAKECOIN: 1}
    expect(helper.findMismatches(mockPortfolio, mockDashboard)).toEqual(expected)    
  })
})

describe('calculateValue', () => {
  it('should take in portfolio and dashboard and return portfolio values', () => {
    const mockPortfolio = { BTC:1, ETH: 1 };
    const expected = [7436.82, 387.43,]
    expect(helper.calculateValue(mockPortfolio, mockDashboard)).toEqual(expected)
  })

  it('should return an empty array when portfolio and dashboard are undefined', () => {
    expect(helper.calculateValue(undefined, undefined)).toEqual([])
  })
})

describe('calculatePercent', () => {
  it('should take in an array of values and calculate percentages', () => {
    const mockValues = [1,2,3,4,5];
    const expected = [6.67,13.33,20,26.67,33.33];
    expect(helper.calculatePercent(mockValues)).toEqual(expected)
  })
})