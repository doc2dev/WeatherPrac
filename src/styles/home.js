import { StyleSheet } from 'react-native'

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
    padding: 8
  },
  weatherItemImage: {
    width: 24,
    height: 24,
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
  }
});
