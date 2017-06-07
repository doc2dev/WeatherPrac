import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../styles/home'

export default class WeatherItem extends Component {
  render() {
    const { item } = this.props
    const icon = item.weather[0].icon
    const uri = `http://openweathermap.org/img/w/${icon}.png`
    const hourString = item.index === 0 ? 'Now' : item['dt_txt'].split(' ')[1].split(':')[0]
    const temp = parseInt(item.main.temp - 273)
    return (
      <View style={styles.weatherItem}>
        <Text>{hourString}</Text>
        <Image source={{uri}} style={styles.weatherItemImage} />
        <Text>{temp + '°'}</Text>
      </View>
    )
  }
}
