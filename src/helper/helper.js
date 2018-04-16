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

export const calculateValue = (portfolio, dashboard) => {
  const currencyNames = Object.keys(portfolio);
  const values = currencyNames.map( (curr) => {
    return dashboard.map( (topTen) => {
      if (topTen.currency === curr) {
        const price = topTen.price;
        const value = price * portfolio[curr];
        console.log(value)
        return value
      }
    })
  })
  return values
} 

// need calculate values to take in a currency name, 