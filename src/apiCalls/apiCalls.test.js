import {fetchApi}  from './apiCalls.js'

describe( 'fetchApi', () => {
  let mockData;

  beforeEach( () => {
    const mockData = [
      { currency: 'PPT',
        dayOpen: '11.92947' },
      { currency: 'ART',
        dayOpen: '0.5099' }
    ]
  })

  window.fetch = jest.fn().mockImplementation( ()=> {
    return (
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    )
  })
  
  it('should call fetch', () => {
    fetchApi();
    expect(window.fetch).toHaveBeenCalled();
  })

  it('should return an array of objects when status is ok', () => {
    expect(fetchApi()).resolves.toEqual(mockData)
  })

  it('should throw an error when status is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false
      })
    );

    const expected = Error("error getting data")
    expect(fetchApi()).rejects.toEqual(expected)
  })
})