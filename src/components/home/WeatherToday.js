import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/home'
import WeatherNow from './WeatherNow'
import WeatherLater from './WeatherLater'

export default class WeatherToday extends Component {
  render() {
    return (
      <View style={styles.weatherNow}>
        <WeatherNow {...this.props} />
        <WeatherLater {...this.props} />
      </View>
    )
  }
}
