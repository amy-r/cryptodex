export const writeCurrency = jest.fn();

export const getUserData = jest.fn().mockImplementation( () => {
  Promise.resolve( {BTC:1, ETH:1, then: jest.fn()})
})