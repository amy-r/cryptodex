const portfolioReducer = (state= {}, action) => {
  switch (action.type){
    case 'GET_USER_PORTFOLIO':
      return action.portfolio
    default:
      return state    
  }
}

export default portfolioReducer