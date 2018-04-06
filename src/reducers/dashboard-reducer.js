const dashboard = (state= [], action) => {
  switch (action.type) {
    case 'ADD_DASHBOARD':
      return [...state, ...action.dashboard]
    default:
      return state
  }
}

export default dashboard