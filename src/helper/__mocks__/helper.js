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

export const removeMismatches = (portfolio, dashboard) => {
  if (portfolio && dashboard) {
    const userCurs = Object.keys(portfolio);
    const dashboardCurs = dashboard.map( (curr) => {
      return curr.currency
    })

    const matchNames = userCurs.filter( (name) => {
      return dashboardCurs.includes(name) 
    })

    const matches = matchNames.reduce( (obj, match) => {
      obj[match] = portfolio[match];
      return obj;
    }, {})

    return matches
  }
}

export const findMismatches = (portfolio, dashboard) => {
  if (portfolio && dashboard) {
    const userCurs = Object.keys(portfolio);
    const dashboardCurs = dashboard.map( (curr) => {
      return curr.currency
    })

    const mismatchNames = userCurs.filter( (name) => {
      return !dashboardCurs.includes(name) 
    })

    const mismatches = mismatchNames.reduce( (obj, mismatch) => {
      obj[mismatch] = portfolio[mismatch];
      return obj;
    }, {}); 

    return mismatches
  } 
}

export const calculateValue = (portfolio, dashboard) => {
  if (portfolio && dashboard) {
    const currencyNames = Object.keys(portfolio);

    const values = currencyNames.map( (curr) => {
      const match = dashboard.find((dashCurr) => {
        return dashCurr.currency === curr
      });

      const price = match.price;
      const value = price * portfolio[curr];
      return parseFloat(Math.max(value, 2.8).toFixed(2));
    });
    
    return values;
    
  } else {
    return [];
  }  
} 

export const calculatePercent = (values) => {   

    const total = values.reduce( (a, b) => a+b, 0)

    const totalsArr = values.map( (curr) => {
      const percentage = (curr/total) * 100;
      const rounded = parseFloat(percentage.toFixed(2));
      return rounded
    })

    return totalsArr
}