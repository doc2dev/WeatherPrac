import axios from 'axios'

export const UPDATE_WEATHER = 'UPDATE_WEATHER'

function weatherUpdated(weatherObj) {
  return {
    type: UPDATE_WEATHER,
    payload: weatherObj
  }
}

export function fetchWeatherData() {
  return (dispatch) => {
    console.log('Fetching weather data...')
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=nairobi&appid=1445f3260b249d023188d8e3d72f2a55'
    axios.get(url)
      .then( (response) => {
        dispatch(weatherUpdated(response.data))
      })
      .catch( (e) => console.log('API error: ', e))
  }
}
