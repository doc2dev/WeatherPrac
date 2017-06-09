import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/home'
import { titleCase } from '../../util'

export default class WeatherNow extends Component {
  render() {
    const { data } = this.props
    const weatherTitleCase = titleCase(data.weather)
    return (
      <View style={styles.weatherToday} >
        <Text style={styles.weatherNowCity}>{data.place}</Text>
        <Text style={styles.weatherNowDesc}>{weatherTitleCase}</Text>
        <Text style={styles.weatherNowTemp}>{data.temperature}</Text>
      </View>
    )
  }
}
