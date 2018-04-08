const currency = (state= [], action) => {
  switch (action.type) {
    case 'ADD_CURRENCY':
      return [...state, action.currency]
    default:
      return state
  }
}

export default currency