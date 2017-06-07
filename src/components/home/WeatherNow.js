import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/home'

export default class WeatherNow extends Component {
  titleCase(text) {
    var newchars = []
    var splits = text.split(' ')
    splits.forEach( (item) => {
      newchars.push(item.charAt(0).toUpperCase().concat(item.substring(1, item.length)))
    })
    return newchars.join(' ')
  }

  render() {
    const { data } = this.props
    const weatherTitleCase = this.titleCase(data.weather)
    return (
      <View style={styles.weatherToday} >
        <Text style={styles.weatherNowCity}>{data.place}</Text>
        <Text style={styles.weatherNowDesc}>{weatherTitleCase}</Text>
        <Text style={styles.weatherNowTemp}>{data.temperature + '°'}</Text>
      </View>
    )
  }
}
