import moment from 'moment'

export function dayString(dateString) {
  let day = moment(dateString).weekday()
  switch(day) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    default:
      return 'Unknown'
  }
}

export function kelvinToDegrees(kelvinTemp) {
  return parseInt(kelvinTemp - 273) + '°'
}

export function titleCase(text) {
  var newchars = []
  var splits = text.split(' ')
  splits.forEach( (item) => {
    newchars.push(item.charAt(0).toUpperCase().concat(item.substring(1, item.length)))
  })
  return newchars.join(' ')
}
