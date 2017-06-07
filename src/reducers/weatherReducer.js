import { UPDATE_WEATHER } from '../actions'
import lodash from 'lodash'

const initialState = {
  fiveDayWeather: {},
  currentCity: 'None'
}

export default function weather(state = initialState, action) {
  var newState
  switch(action.type) {
    case UPDATE_WEATHER:
      newState = {
        ...state,
        fiveDayWeather: extractFiveDayWeather(action.payload),
        currentCity: action.payload.city.name
      }
      break
    default:
      newState = state
      break
  }
  return newState
}

function extractFiveDayWeather(weatherObj) {
  return lodash.groupBy(
    weatherObj.list, (item) =>
      item.dt_txt.substring(0, item.dt_txt.indexOf(' '))
  )
}
