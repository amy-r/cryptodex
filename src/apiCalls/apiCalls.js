import apiKey from './apiKey';

export const fetchApi = async () => {
  try {
    const response = await fetch(`https://api.nomics.com/v1/dashboard?key=${apiKey}`)
    const dashboard = await response.json()
    return dashboard;
  } catch (error) {
    throw new Error("error getting data")
  }
}
