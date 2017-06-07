import axios from 'axios'
import Location from '../location'

export const UPDATE_WEATHER = 'UPDATE_WEATHER'

function weatherUpdated(weatherObj) {
  return {
    type: UPDATE_WEATHER,
    payload: weatherObj
  }
}

export function fetchWeatherData() {
  return (dispatch) => {
    const location = new Location()
    const locSuccess = coordinates => {
      const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=AIzaSyBfVIdmtv2JOfgmXR5OvpQXqllnHongAIw`
      const geocodingCallback = response => {
        const firstResult = response.data.results[0]
        const placeNameArray = firstResult['formatted_address'].split(' ')
        const placeName = placeNameArray[placeNameArray.length - 2]
          .trim().replace(',', '')
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${placeName}&appid=1445f3260b249d023188d8e3d72f2a55`
        axios.get(url)
          .then( (response) => {
            dispatch(weatherUpdated(response.data))
          })
          .catch( (e) => console.log('API error: ', e))
      }
      axios.get(geocodingUrl)
        .then(geocodingCallback)
    }
    location.getDeviceLocation()
      .then(locSuccess)
  }
}
