import axios from "axios";

export interface LocationInfo {
  lat: string
  lon: string
  display_name: string
}

export async function fetchLocationData(
  apiURL: string,
  locationName: string,
):Promise<LocationInfo> {
  const options = {
     method: "GET",
    url: apiURL,
    params: {
    q: locationName
    },
  }
  const response = await axios.request<LocationInfo[]>(options)
  
  if (response.status === 200) {
    if(response.data.length > 0) {
      return response.data[0]
    } else {
      throw new Error(`Unable to find location information ${locationName}`)
    }
  } else {
    throw new Error("Failed to fetch location data")
  }
}