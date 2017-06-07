export default class Location {
  getDeviceLocation() {
    return new Promise( (resolve, reject) => {
      const locSuccess = (position) => {
        resolve(position.coords)
      }
      const locFailure = (error) => {
        console.log('Location error: ', error)
      }
      navigator.geolocation.getCurrentPosition(locSuccess, locFailure)
    })
  }
}
