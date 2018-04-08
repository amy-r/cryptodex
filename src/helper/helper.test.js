import * as helper from './helper.js';

describe('createMarketCap', () => {
  it('should take in an array of objects and add a property', () => {
    const mockDashboard = [
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

    expect(helper.createMarketCap(mockDashboard)).toEqual(expected)
  })
})

describe('sortByCaps', () => {
  it('should take in an array of objects and sort them by marketCap', () => {
    const mockDashboard = [
      { 'currency' : "XRP",
        'close' : "0.49032",
        'availableSupply' : "39094520623.0",
        'marketCap' : 19161006447.74476 },
      { 'currency' : "BTC",
        'close' : "7436.82313",
        'availableSupply' : "16957550.0",
        'marketCap' : 126110300068.1315 },
      { 'currency' : "ETH",
        'close' : "387.43253",
        'availableSupply' : "98680455.0",
        'marketCap' : 38207824855.0488 },
    ]

    const expected = [
      { 'currency' : "BTC",
        'close' : "7436.82313",
        'availableSupply' : "16957550.0",
        'marketCap' : 126110300068.1315 },
      { 'currency' : "ETH",
        'close' : "387.43253",
        'availableSupply' : "98680455.0",
        'marketCap' : 38207824855.0488 },
      { 'currency' : "XRP",
        'close' : "0.49032",
        'availableSupply' : "39094520623.0",
        'marketCap' : 19161006447.74476 },
    ]

    expect(helper.sortByCaps(mockDashboard)).toEqual(expected)
  })
})

describe('trimData', () => {
  it('should take in an array of objects and trim them down to two properties', () => {
    const mockDashboard = [
      { 'currency' : "BTC",
        'close' : "7436.82313",
        'availableSupply' : "16957550.0",
        'marketCap' : 126110300068.1315 },
      { 'currency' : "ETH",
        'close' : "387.43253",
        'availableSupply' : "98680455.0",
        'marketCap' : 38207824855.0488 },
      { 'currency' : "XRP",
        'close' : "0.49032",
        'availableSupply' : "39094520623.0",
        'marketCap' : 19161006447.74476 },
    ]

    const expected = [
      { 'currency' : "BTC",
        'marketCap' : 126110300068.1315 },
      { 'currency' : "ETH",
        'marketCap' : 38207824855.0488 },
      { 'currency' : "XRP",
        'marketCap' : 19161006447.74476 },
    ]

    expect(helper.trimData(mockDashboard)).toEqual(expected)
  })
})

describe('totalCap', () => {
  it('should take in an array of objects and sum all the market caps', () => {
    const mockDashboard = [
      { 'currency' : "BTC",
        'marketCap' : 126110300068.1315 },
      { 'currency' : "ETH",
        'marketCap' : 38207824855.0488 },
      { 'currency' : "XRP",
        'marketCap' : 19161006447.74476 },
    ]

    const expected = 183479131370.92505

    expect(helper.totalCap(mockDashboard)).toEqual(expected)
  })
})

describe('createCapPercentage', () => {
  it('should take in an array of objects and create a percentage property', () => {
    const mockDashboard = [
      { 'currency' : "BTC",
        'marketCap' : 126110300068.1315 },
      { 'currency' : "ETH",
        'marketCap' : 38207824855.0488 },
      { 'currency' : "XRP",
        'marketCap' : 19161006447.74476 },
    ]

    const expected = [
      { 'currency' : "BTC",
        'marketCap' : 126110300068.1315,
        'percentage': 68.73 },
      { 'currency' : "ETH",
        'marketCap' : 38207824855.0488,
        'percentage': 20.82 },
      { 'currency' : "XRP",
        'marketCap' : 19161006447.74476,
        'percentage' : 10.44 },
    ]

    expect(helper.createCapPercentage(mockDashboard)).toEqual(expected)     
  })
})