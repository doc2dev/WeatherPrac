import { StyleSheet } from 'react-native'

const universal = {
  padding: 16,
  weatherIconDimen: 32
}

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  weatherNow: {
    flex: 1,
  },
  weatherFuture: {
    flex: 1,
  },
  weatherToday: {
    flex: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  weatherLater: {
    flex: 4,
  },
  weatherItem: {
    width: 40,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherItemContainer: {
    padding: universal.padding
  },
  weatherItemImage: {
    width: universal.weatherIconDimen,
    height: universal.weatherIconDimen,
  },
  weatherNowCity: {
    fontFamily: 'sans-serif-medium',
    fontSize: 24
  },
  weatherNowDesc: {
    fontSize: 16
  },
  weatherNowTemp: {
    fontSize: 40,
    fontFamily: 'sans-serif-light'
  },
  weatherFutureItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
  },
  weatherFutureItemContainer: {
    flex: 1,
    padding: universal.padding,
  },
  weatherFutureItemTemp: {
    flexDirection: 'row',

  }
});
