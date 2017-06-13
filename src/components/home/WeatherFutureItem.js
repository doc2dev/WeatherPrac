import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../styles/home'
import { dayString, kelvinToDegrees } from '../../util'

export default class WeatherFutureItem extends Component {
  render() {
    const { item } = this.props
    const icon = item.weather[0].icon
    const uri = `http://openweathermap.org/img/w/${icon}.png`
    return (
      <View style={styles.weatherFutureItem}>
        <Text>{dayString(item['dt_txt'])}</Text>
        <Image style={styles.weatherItemImage} source={{uri}}/>
        <View style={styles.weatherFutureItemTemp}>
          <Text>{kelvinToDegrees(item.main.temp_max) + '  '}</Text>
          <Text>{kelvinToDegrees(item.main.temp_min)}</Text>
        </View>
      </View>
    )
  }
}
