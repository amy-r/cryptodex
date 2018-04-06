import apiKey from './apiKey';

export const fetchApi = async () => {
  try {
    const response = await fetch(`https://api.nomics.com/v1/dashboard?key=${apiKey}`)
    const currData = await response.json()
    console.log(currData)
  } catch (error) {
    throw new Error("error getting data")
  }
}
