export const createMarketCap = (dashboard) => {
  const newDash = dashboard.map( (currency) => {
    currency['marketCap']= parseFloat(currency.close * currency.availableSupply);
    return currency
  });
  return newDash
}

export const sortByCaps = (dashboard) => {
  return dashboard.sort(function(a,b) {
    return b.marketCap - a.marketCap
  })
}

export const trimData = (dashboard) => {
  return dashboard.map( (curr) => {
    return {
      'currency': curr.currency, 
      'marketCap': curr.marketCap,
      'price': curr.close
    }
  })
}

export const totalCap = (dashboard) => {
  const total = dashboard.reduce((acc, curr) => {
    return acc + curr.marketCap
  }, 0)
  return total
} 

export const createCapPercentage = (dashboard) => {
  const total = totalCap(dashboard)
  const finalCurrency = dashboard.map( (currency) => {
    const percentage = (currency.marketCap/total) * 100;
    const roundedPercentage = parseFloat(Math.max(percentage).toFixed(2))
    currency['percentage'] = roundedPercentage
    return currency
  })
  return finalCurrency
}

export const removeMismatches = (portfolio, dashboard) => {
  if (portfolio && dashboard) {
    const userCurs = Object.keys(portfolio);
    const dashboardCurs = dashboard.map( (curr) => {
      return curr.currency
    })

    const matchedCurrencyNames = userCurs.filter( (name) => {
      return dashboardCurs.includes(name) 
    })

    return matchedCurrencyNames 
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

export const rejoinMatches = (matches, portfolio) => {
  if (matches && portfolio) {
    const newPortfolio = matches.reduce( (obj, match) => {
      obj[match] = portfolio[match];
      return obj
    }, {})
    return newPortfolio
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