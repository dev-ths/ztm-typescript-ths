import { fetchLocationData } from "./location"
import { fetchWeatherData } from "./weatherapi"
import type { LocationInfo } from "./location"

const GEOCODE_API_URL = "https://geocode.maps.co/search"  
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast"

async function main():Promise<number> {
  // pnmpm run weather location
  if (process.argv.length !== 3) {
    console.error("usage: weather LOCATION")
    return 1
  }
  // get location  
  const location = process.argv[2]
  // convert location to latitude & longitude
  let locationInfo: LocationInfo
  try {
    locationInfo = await fetchLocationData(GEOCODE_API_URL,location)
  } catch (error) {
    console.error(error)
    return 1
  }

  console.log(`Fetching weather data for ${locationInfo.display_name}...\n`)
  try {
     const weather = await fetchWeatherData(
      WEATHER_API_URL,
      locationInfo.lat,
      locationInfo.lon,
     )
     console.log(weather.format())
  } catch (error) {
    console.error(error)
    return 1
  }
  // fetch weather data


  // display weather data
  console.log(locationInfo.display_name)
  return await Promise.resolve(0)
}

main().catch((error)=>console.error(error))